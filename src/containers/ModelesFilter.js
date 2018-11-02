import {connect} from "react-redux";
import {collectOptions, SELECT_OPTION} from "../Utils";
import {getAllLabel, getCollector, getId, getLabel} from "../models/FiltersDefinition";
import FilterSelect from "../components/FilterSelect";

const INDEX = 1;

const mapStateToProps = state => {
    return {
        id: getId(INDEX),
        label: getLabel(INDEX),
        allLabel: getAllLabel(INDEX),
        values: collectOptions(
            state.vehiculier.vehicules,
            state.vehiculier.selections,
            INDEX,
            getCollector(INDEX),
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