import {connect} from "react-redux";
import {collectOptions, SELECT_OPTION} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 4;

const getId = () => "carrosseries";

const getLabel = () => "Carrosserie";

const getAllLabel = () => "Toutes les carrosseries";

const getCollector = () => vehicule => vehicule.carrosserieLibelle;

const mapStateToProps = state => {
    return {
        id: getId(),
        label: getLabel(),
        allLabel: getAllLabel(),
        values: collectOptions(
            state.vehiculier.vehicules,
            state.vehiculier.selections,
            INDEX,
            getCollector(),
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