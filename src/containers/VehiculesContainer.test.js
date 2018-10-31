import {filterPuissance} from "./VehiculesContainer";

it('should only keep vehicles with power 6', () => {
        const vehicules = [{puissance: 4},{puissance: 5},{puissance: 6}];
        const filteredVehicules = filterPuissance(vehicules, 6);
        expect(filteredVehicules).toEqual([{puissance: 6}]);
    }
);