import {connect} from "react-redux";
import {ALL, collectOptions} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 0;

const mapStateToProps = state => {
    return {
        id: "marques",
        label: "Marque",
        allLabel: "Toutes les marques",
        values: collectOptions(
            state.vehiculier.vehicules,
            ALL,
            ALL,
            ALL,
            ALL,
            ALL,
            ALL,
            vehicule => vehicule.marqueLibelle,
        ),
        selectedValue: state.vehiculier.selectedMarque,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: marque => dispatch({
            type: "SELECT_MARQUE",
            index: INDEX,
            marque: marque
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)