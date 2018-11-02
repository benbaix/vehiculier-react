export const ALL = "all";

export const collectOptions = (vehicules, selections, index, collector) =>
    [...new Set(
        vehicules
            .filter(vehicule => index <= 0 || vehicule.marqueLibelle === selections[0])
            .filter(vehicule => index <= 1 || vehicule.modeleLibelle === selections[1])
            .filter(vehicule => index <= 2 || vehicule.boiteVitesses === selections[2])
            .filter(vehicule => index <= 3 || vehicule.energieLibelle === selections[3])
            .filter(vehicule => index <= 4 || vehicule.carrosserieLibelle === selections[4])
            .filter(vehicule => index <= 5 || String(vehicule.puissance) === selections[5])
            .map(vehicule => collector(vehicule))
    )].sort();