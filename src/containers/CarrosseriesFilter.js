import {connect} from "react-redux";
import {uniqueSortedItems} from "../Utils";
import FilterSelect from "../components/FilterSelect";


const mapStateToProps = state => {
    return {
        id: "carrosseries",
        label: "Carrosserie",
        allLabel: "Toutes les carrosseries",
        values: collectCarrosseries(state.vehiculier.vehicules),
        selectedValue: state.vehiculier.selectedCarrosserie
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: carrosserie => dispatch({
            type: "SELECT_CARROSSERIE",
            carrosserie: carrosserie
        })
    }
};

export const collectCarrosseries = (vehicules) => uniqueSortedItems(vehicules.map(vehicule => vehicule.carrosserieLibelle));

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)