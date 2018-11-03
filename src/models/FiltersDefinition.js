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
        collector: vehicule => String(vehicule.puissance) + " CV",
    },
    {
        id: "versions",
        label: "Version",
        allLabel: "Toutes les versions",
        collector: vehicule => vehicule.version,
    },
];

export default FILTERS;