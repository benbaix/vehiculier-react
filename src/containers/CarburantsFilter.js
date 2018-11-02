import {connect} from "react-redux";
import {uniqueSortedItems} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 3;

const mapStateToProps = state => {
    return {
        id: "carburants",
        label: "Carburant",
        allLabel: "Tous les carburants",
        values: collectCarburants(state.vehiculier.vehicules),
        selectedValue: state.vehiculier.selectedCarburant,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: carburant => dispatch({
            type: "SELECT_CARBURANT",
            index: INDEX,
            carburant: carburant
        })
    }
};

export const collectCarburants = (vehicules) => uniqueSortedItems(vehicules.map(vehicule => vehicule.energieLibelle));

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)