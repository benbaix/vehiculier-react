import VEHICULES from "../mock/vehicules";
import {ALL} from "../Utils";

const initialState = {
    vehicules: VEHICULES,
    selectedIndex: -1,
    selectedMarque: ALL,
    selectedModele: ALL,
    selectedBoite: ALL,
    selectedCarburant: ALL,
    selectedCarrosserie: ALL,
    selectedPuissance: ALL,
};

const vehiculier = (state = initialState, action) => {
    console.log(action.index);
    switch (action.type) {
        case "SELECT_MARQUE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.marque, action.index),
                selectedMarque: action.marque,
                selectedModele: ALL,
                selectedBoite: ALL,
                selectedCarburant: ALL,
                selectedCarrosserie: ALL,
                selectedPuissance: ALL,
            };
        case "SELECT_MODELE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.modele, action.index),
                selectedModele: action.modele,
                selectedBoite: ALL,
                selectedCarburant: ALL,
                selectedCarrosserie: ALL,
                selectedPuissance: ALL,
            };
        case "SELECT_BOITE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.boite, action.index),
                selectedBoite: action.boite,
                selectedCarburant: ALL,
                selectedCarrosserie: ALL,
                selectedPuissance: ALL,
            };
        case "SELECT_CARBURANT":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.carburant, action.index),
                selectedCarburant: action.carburant,
                selectedCarrosserie: ALL,
                selectedPuissance: ALL,
            };
        case "SELECT_CARROSSERIE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.carrosserie, action.index),
                selectedCarrosserie: action.carrosserie,
                selectedPuissance: ALL,
            };
        case "SELECT_PUISSANCE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.puissance, action.index),
                selectedPuissance: action.puissance === ALL ? ALL : parseInt(action.puissance),
            };
        default:
            return state;
    }
};

const getSelectedIndex = (option, index) => option === ALL ? index - 1 : index;

export default vehiculier;
