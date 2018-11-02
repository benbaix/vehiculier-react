import {connect} from "react-redux";
import {ALL} from "../Utils";
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
    .filter(vehicule => selections[0] === ALL || vehicule.marqueLibelle === selections[0])
    .filter(vehicule => selections[1] === ALL || vehicule.modeleLibelle === selections[1])
    .filter(vehicule => selections[2] === ALL || vehicule.boiteVitesses === selections[2])
    .filter(vehicule => selections[3] === ALL || vehicule.energieLibelle === selections[3])
    .filter(vehicule => selections[4] === ALL || vehicule.carrosserieLibelle === selections[4])
    .filter(vehicule => selections[5] === ALL || String(vehicule.puissance) === selections[5]);

export default connect(mapStateToProps)(VehiculesTable)