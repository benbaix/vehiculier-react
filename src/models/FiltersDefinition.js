import {updateModeles, updateVehicules} from "../redux/actions";
import {fetchModeles, fetchVehicules} from "../api";

const MARQUE = {
    id: "marques",
    label: "Marque",
    allLabel: "Sélectionnez une marque",
    options: vehiculier => vehiculier.marques,
    collector: vehicule => vehicule.marqueLibelle,
    updateValues: (marque, selections, dispatch) =>
        fetchModeles(marque, modeles => dispatch(updateModeles(modeles))),
};

const MODELE = {
    id: "modeles",
    label: "Modèle",
    allLabel: "Sélectionnez un modèle",
    options: vehiculier => vehiculier.modeles,
    collector: vehicule => vehicule.modeleLibelle,
    updateValues: (modele, selections, dispatch) =>
        fetchVehicules(selections[FILTERS.indexOf(MARQUE)], modele, vehicules => dispatch(updateVehicules(vehicules))),
};

const BOITE = {
    id: "boites",
    label: "Boîte de vitesses",
    allLabel: "Sélectionnez un type de boite",
    options: vehiculier => vehiculier.vehicules,
    collector: vehicule => vehicule.boiteVitesses,
};

const CARBURANT = {
    id: "carburants",
    label: "Carburant",
    allLabel: "Sélectionnez un type de carburant",
    options: vehiculier => vehiculier.vehicules,
    collector: vehicule => vehicule.energieLibelle,
};

const CARROSSERIE = {
    id: "carrosseries",
    label: "Carrosserie",
    allLabel: "Sélectionnez une carrosserie",
    options: vehiculier => vehiculier.vehicules,
    collector: vehicule => vehicule.carrosserieLibelle,
};

const PUISSANCE = {
    id: "puissances",
    label: "Puissance",
    allLabel: "Sélectionnez une puissance",
    options: vehiculier => vehiculier.vehicules,
    collector: vehicule => String(vehicule.puissance) + " CV",
};

const VERSION = {
    id: "versions",
    label: "Version",
    allLabel: "Sélectionnez une version",
    options: vehiculier => vehiculier.vehicules,
    collector: vehicule => vehicule.version,
};

const FILTERS = [
    MARQUE,
    MODELE,
    BOITE,
    CARBURANT,
    CARROSSERIE,
    PUISSANCE,
    VERSION,
];

export default FILTERS;