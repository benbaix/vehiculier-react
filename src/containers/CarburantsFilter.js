import {connect} from "react-redux";
import {uniqueSortedItems} from "../Utils";
import FilterSelect from "../components/FilterSelect";


const mapStateToProps = state => {
    return {
        allLabel: "Tous les carburants",
        values: collectCarburants(state.vehiculier.vehicules),
        selectedValue: state.vehiculier.selectedCarburant
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: carburant => dispatch({
            type: "SELECT_CARBURANT",
            carburant: carburant
        })
    }
};

export const collectCarburants = (vehicules) => uniqueSortedItems(vehicules.map(vehicule => vehicule.energieLibelle));

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)