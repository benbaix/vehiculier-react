import {getCollector} from "./models/FiltersDefinition";

export const ALL = "all";

export const SELECT_OPTION = "SELECT_OPTION";

export const collectOptions = (vehicules, selections, index, collector) =>
    [...new Set(
        vehicules
            .filter(vehicule => index <= 0 || getCollector(0)(vehicule) === selections[0])
            .filter(vehicule => index <= 1 || getCollector(1)(vehicule) === selections[1])
            .filter(vehicule => index <= 2 || getCollector(2)(vehicule) === selections[2])
            .filter(vehicule => index <= 3 || getCollector(3)(vehicule) === selections[3])
            .filter(vehicule => index <= 4 || getCollector(4)(vehicule) === selections[4])
            .filter(vehicule => index <= 5 || getCollector(5)(vehicule) === selections[5])
            .map(vehicule => collector(vehicule))
    )].sort();