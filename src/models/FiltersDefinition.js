const FILTERS = [
    {
        id: "marques",
        label: "Marque",
        allLabel: "Toutes les marques",
        collector: vehicule => vehicule.marqueLibelle,
    },
    {
        id: "modeles",
        label: "Modèle",
        allLabel: "Tous les modèles",
        collector: vehicule => vehicule.modeleLibelle,
    },
    {
        id: "boites",
        label: "Boîte de vitesses",
        allLabel: "Toutes les boites",
        collector: vehicule => vehicule.boiteVitesses,
    },
    {
        id: "carburants",
        label: "Carburant",
        allLabel: "Tous les carburants",
        collector: vehicule => vehicule.energieLibelle,
    },
    {
        id: "carrosseries",
        label: "Carrosserie",
        allLabel: "Toutes les carrosseries",
        collector: vehicule => vehicule.carrosserieLibelle,
    },
    {
        id: "puissances",
        label: "Puissance",
        allLabel: "Toutes les puissances",
        collector: vehicule => String(vehicule.puissance),
    },
    {
        id: "versions",
        label: "Version",
        allLabel: "Toutes les versions",
        collector: vehicule => vehicule.version,
    },
];

const getFilters = () => FILTERS;

const getNbFilters = () => FILTERS.length;

const getId = (index) => FILTERS[index].id;

const getLabel = (index) => FILTERS[index].label;

const getAllLabel = (index) => FILTERS[index].allLabel;

const getCollector = (index) => FILTERS[index].collector;

export {getFilters, getNbFilters, getId, getLabel, getAllLabel, getCollector};