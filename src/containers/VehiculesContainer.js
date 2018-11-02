import {connect} from "react-redux";
import VehiculesTable from "../components/VehiculesTable";


const mapStateToProps = state => {
    return {
        vehicules: state.vehiculier.vehicules
    };
};

export default connect(mapStateToProps)(VehiculesTable)