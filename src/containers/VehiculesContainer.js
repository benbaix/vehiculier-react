import {connect} from "react-redux";
import VehiculesTable from "../components/VehiculesTable";


const mapStateToProps = state => {
    return {
        vehicules: filterPuissance(
            state.vehiculier.vehicules,
            state.vehiculier.selectedPuissance
        )
    };
};

export const filterPuissance = (vehicules, puissance) => {
    if (!puissance) {
        return vehicules;
    }
    return vehicules.filter(vehicule => vehicule.puissance === puissance);
}

export default connect(mapStateToProps)(VehiculesTable)