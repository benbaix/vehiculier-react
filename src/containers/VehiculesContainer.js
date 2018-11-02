import {connect} from "react-redux";
import {filterVehicules} from "../Utils";
import VehiculesTable from "../components/VehiculesTable";


const mapStateToProps = state => {
    return {
        vehicules: filterVehicules(
            state.vehiculier.vehicules,
            state.vehiculier.selectedMarque,
            state.vehiculier.selectedModele,
            state.vehiculier.selectedBoite,
            state.vehiculier.selectedCarburant,
            state.vehiculier.selectedCarrosserie,
            state.vehiculier.selectedPuissance,
        )
    };
};

export default connect(mapStateToProps)(VehiculesTable)