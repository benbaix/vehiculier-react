import VEHICULES from "../mock/vehicules";

const initialState = {
    vehicules: VEHICULES,
    selectedMarque: "all",
    selectedModele: "all",
    selectedBoite: "all",
    selectedCarburant: "all",
    selectedCarrosserie: "all",
    selectedPuissance: "all",
};

const vehiculier = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_MARQUE":
            return {
                ...state,
                selectedMarque: action.marque,
            };
        case "SELECT_MODELE":
            return {
                ...state,
                selectedModele: action.modele,
            };
        case "SELECT_BOITE":
            return {
                ...state,
                selectedBoite: action.boite,
            };
        case "SELECT_CARBURANT":
            return {
                ...state,
                selectedCarburant: action.carburant,
            };
        case "SELECT_CARROSSERIE":
            return {
                ...state,
                selectedCarrosserie: action.carrosserie,
            };
        case "SELECT_PUISSANCE":
            return {
                ...state,
                selectedPuissance: action.puissance === "all" ? "all" : parseInt(action.puissance),
            };
        default:
            return state;
    }
};

export default vehiculier;
