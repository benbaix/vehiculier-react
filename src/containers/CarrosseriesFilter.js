import {connect} from "react-redux";
import {collectOptions, SELECT_OPTION} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 4;

const mapStateToProps = state => {
    return {
        id: "carrosseries",
        label: "Carrosserie",
        allLabel: "Toutes les carrosseries",
        values: collectOptions(
            state.vehiculier.vehicules,
            state.vehiculier.selections,
            INDEX,
            vehicule => vehicule.carrosserieLibelle,
        ),
        selectedValue: state.vehiculier.selections[INDEX],
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: value => dispatch({
            type: SELECT_OPTION,
            index: INDEX,
            value: value
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)