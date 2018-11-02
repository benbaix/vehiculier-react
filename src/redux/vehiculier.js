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
                selectedIndex: getSelectedIndex(action.value, action.index),
                selectedMarque: action.value,
                selectedModele: ALL,
                selectedBoite: ALL,
                selectedCarburant: ALL,
                selectedCarrosserie: ALL,
                selectedPuissance: ALL,
            };
        case "SELECT_MODELE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.value, action.index),
                selectedModele: action.value,
                selectedBoite: ALL,
                selectedCarburant: ALL,
                selectedCarrosserie: ALL,
                selectedPuissance: ALL,
            };
        case "SELECT_BOITE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.value, action.index),
                selectedBoite: action.value,
                selectedCarburant: ALL,
                selectedCarrosserie: ALL,
                selectedPuissance: ALL,
            };
        case "SELECT_CARBURANT":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.value, action.index),
                selectedCarburant: action.value,
                selectedCarrosserie: ALL,
                selectedPuissance: ALL,
            };
        case "SELECT_CARROSSERIE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.value, action.index),
                selectedCarrosserie: action.value,
                selectedPuissance: ALL,
            };
        case "SELECT_PUISSANCE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.value, action.index),
                selectedPuissance: action.value === ALL ? ALL : parseInt(action.value),
            };
        default:
            return state;
    }
};

const getSelectedIndex = (option, index) => option === ALL ? index - 1 : index;

export default vehiculier;
