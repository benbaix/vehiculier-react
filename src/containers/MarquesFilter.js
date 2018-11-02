import {connect} from "react-redux";
import {collectOptions, SELECT_OPTION} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 0;

const getId = () => "marques";

const getLabel = () => "Marque";

const getAllLabel = () => "Toutes les marques";

const getCollector = () => vehicule => vehicule.marqueLibelle;

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