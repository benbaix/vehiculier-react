import {connect} from "react-redux";
import FilterSelect from "../components/FilterSelect";


const mapStateToProps = state => {
    return {
        allLabel: "Toutes les puissances",
        values: collectPuissances(state.vehiculier.vehicules)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: puissance =>dispatch({
            type: "SELECT_PUISSANCE",
            puissance: puissance
        })
    }
}

export const collectPuissances = (vehicules) => [...new Set(vehicules.map(vehicule => vehicule.puissance))].sort();

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)