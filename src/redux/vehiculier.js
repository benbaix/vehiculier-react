import VEHICULES from "../mock/vehicules";

const initialState = {
    vehicules: VEHICULES,
    selectedIndex: -1,
    selectedMarque: "all",
    selectedModele: "all",
    selectedBoite: "all",
    selectedCarburant: "all",
    selectedCarrosserie: "all",
    selectedPuissance: "all",
};

const vehiculier = (state = initialState, action) => {
    console.log(action.index);
    switch (action.type) {
        case "SELECT_MARQUE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.marque, action.index),
                selectedMarque: action.marque,
                selectedModele: "all",
                selectedBoite: "all",
                selectedCarburant: "all",
                selectedCarrosserie: "all",
                selectedPuissance: "all",
            };
        case "SELECT_MODELE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.modele, action.index),
                selectedModele: action.modele,
                selectedBoite: "all",
                selectedCarburant: "all",
                selectedCarrosserie: "all",
                selectedPuissance: "all",
            };
        case "SELECT_BOITE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.boite, action.index),
                selectedBoite: action.boite,
                selectedCarburant: "all",
                selectedCarrosserie: "all",
                selectedPuissance: "all",
            };
        case "SELECT_CARBURANT":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.carburant, action.index),
                selectedCarburant: action.carburant,
                selectedCarrosserie: "all",
                selectedPuissance: "all",
            };
        case "SELECT_CARROSSERIE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.carrosserie, action.index),
                selectedCarrosserie: action.carrosserie,
                selectedPuissance: "all",
            };
        case "SELECT_PUISSANCE":
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.puissance, action.index),
                selectedPuissance: action.puissance === "all" ? "all" : parseInt(action.puissance),
            };
        default:
            return state;
    }
};

const getSelectedIndex = (option, index) => option === "all" ? index - 1 : index;

export default vehiculier;
