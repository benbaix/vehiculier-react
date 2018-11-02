import {connect} from "react-redux";
import {ALL} from "../Utils";
import {getCollector} from "../models/FiltersDefinition";
import VehiculesTable from "../components/VehiculesTable";


const mapStateToProps = state => {
    return {
        vehicules: filterVehicules(
            state.vehiculier.vehicules,
            state.vehiculier.selections,
        )
    };
};

export const filterVehicules = (vehicules, selections) => vehicules
    .filter(vehicule => selections[0] === ALL || getCollector(0)(vehicule) === selections[0])
    .filter(vehicule => selections[1] === ALL || getCollector(1)(vehicule) === selections[1])
    .filter(vehicule => selections[2] === ALL || getCollector(2)(vehicule) === selections[2])
    .filter(vehicule => selections[3] === ALL || getCollector(3)(vehicule) === selections[3])
    .filter(vehicule => selections[4] === ALL || getCollector(4)(vehicule) === selections[4])
    .filter(vehicule => selections[5] === ALL || getCollector(5)(vehicule) === selections[5]);

export default connect(mapStateToProps)(VehiculesTable)