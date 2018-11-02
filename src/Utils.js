export const ALL = "all";

export const filterVehicules = (vehicules, marque, modele, boite, carburant, carrosserie, puissance) => vehicules
    .filter(vehicule => marque === ALL || vehicule.marqueLibelle === marque)
    .filter(vehicule => modele === ALL || vehicule.modeleLibelle === modele)
    .filter(vehicule => boite === ALL || vehicule.boiteVitesses === boite)
    .filter(vehicule => carburant === ALL || vehicule.energieLibelle === carburant)
    .filter(vehicule => carrosserie === ALL || vehicule.carrosserieLibelle === carrosserie)
    .filter(vehicule => puissance === ALL || vehicule.puissance === puissance);

export const collectOptions = (vehicules, marque, modele, boite, carburant, carrosserie, puissance, collector) =>
    [...new Set(
        filterVehicules(vehicules, marque, modele, boite, carburant, carrosserie, puissance)
            .map(vehicule => collector(vehicule))
    )].sort();