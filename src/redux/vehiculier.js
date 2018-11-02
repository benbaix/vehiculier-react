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
    let vehicules;
    switch (action.type) {
        case "SELECT_MARQUE":
            vehicules = filterVehicules(
                action.marque,
                state.selectedModele,
                state.selectedBoite,
                state.selectedCarburant,
                state.selectedCarrosserie,
                state.selectedPuissance,
            );
            return {
                ...state,
                selectedMarque: action.marque,
                vehicules: vehicules
            };
        case "SELECT_MODELE":
            vehicules = filterVehicules(
                state.selectedMarque,
                action.modele,
                state.selectedBoite,
                state.selectedCarburant,
                state.selectedCarrosserie,
                state.selectedPuissance,
            );
            return {
                ...state,
                selectedModele: action.modele,
                vehicules: vehicules
            };
        case "SELECT_BOITE":
            vehicules = filterVehicules(
                state.selectedMarque,
                state.selectedModele,
                action.boite,
                state.selectedCarburant,
                state.selectedCarrosserie,
                state.selectedPuissance,
            );
            return {
                ...state,
                selectedBoite: action.boite,
                vehicules: vehicules
            };
        case "SELECT_CARBURANT":
            vehicules = filterVehicules(
                state.selectedMarque,
                state.selectedModele,
                state.selectedBoite,
                action.carburant,
                state.selectedCarrosserie,
                state.selectedPuissance,
            );
            return {
                ...state,
                selectedCarburant: action.carburant,
                vehicules: vehicules
            };
        case "SELECT_CARROSSERIE":
            vehicules = filterVehicules(
                state.selectedMarque,
                state.selectedModele,
                state.selectedBoite,
                state.selectedCarburant,
                action.carrosserie,
                state.selectedPuissance,
            );
            return {
                ...state,
                selectedCarrosserie: action.carrosserie,
                vehicules: vehicules
            };
        case "SELECT_PUISSANCE":
            vehicules = filterVehicules(
                state.selectedMarque,
                state.selectedModele,
                state.selectedBoite,
                state.selectedCarburant,
                state.selectedCarrosserie,
                action.puissance === "all" ? "all" : parseInt(action.puissance),
            );
            return {
                ...state,
                selectedPuissance: action.puissance === "all" ? "all" : parseInt(action.puissance),
                vehicules: vehicules
            };
        default:
            return state;
    }
};

export const filterVehicules = (marque, modele, boite, carburant, carrosserie, puissance) => VEHICULES
        .filter(vehicule => marque === "all" || vehicule.marqueLibelle === marque)
        .filter(vehicule => modele === "all" || vehicule.modeleLibelle === modele)
        .filter(vehicule => boite === "all" || vehicule.boiteVitesses === boite)
        .filter(vehicule => carburant === "all" || vehicule.energieLibelle === carburant)
        .filter(vehicule => carrosserie === "all" || vehicule.carrosserieLibelle === carrosserie)
        .filter(vehicule => puissance === "all" || vehicule.puissance === puissance);

export default vehiculier;
