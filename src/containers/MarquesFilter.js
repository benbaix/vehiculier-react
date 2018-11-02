import {connect} from "react-redux";
import {collectOptions, SELECT_OPTION} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 0;

const mapStateToProps = state => {
    return {
        id: "marques",
        label: "Marque",
        allLabel: "Toutes les marques",
        values: collectOptions(
            state.vehiculier.vehicules,
            state.vehiculier.selections,
            INDEX,
            vehicule => vehicule.marqueLibelle,
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