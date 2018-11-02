export const filterVehicules = (vehicules, marque, modele, boite, carburant, carrosserie, puissance) => vehicules
    .filter(vehicule => marque === "all" || vehicule.marqueLibelle === marque)
    .filter(vehicule => modele === "all" || vehicule.modeleLibelle === modele)
    .filter(vehicule => boite === "all" || vehicule.boiteVitesses === boite)
    .filter(vehicule => carburant === "all" || vehicule.energieLibelle === carburant)
    .filter(vehicule => carrosserie === "all" || vehicule.carrosserieLibelle === carrosserie)
    .filter(vehicule => puissance === "all" || vehicule.puissance === puissance);

export const collectOptions = (vehicules, marque, modele, boite, carburant, carrosserie, puissance, collector) =>
    [...new Set(
        filterVehicules(vehicules, marque, modele, boite, carburant, carrosserie, puissance)
            .map(vehicule => collector(vehicule))
    )].sort();