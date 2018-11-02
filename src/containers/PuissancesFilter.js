import {connect} from "react-redux";
import {collectOptions, SELECT_OPTION} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 5;

const mapStateToProps = state => {
    return {
        id: "puissances",
        label: "Puissance",
        allLabel: "Toutes les puissances",
        values: collectOptions(
            state.vehiculier.vehicules,
            state.vehiculier.selections,
            INDEX,
            vehicule => String(vehicule.puissance),
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