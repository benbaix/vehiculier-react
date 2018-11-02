import {connect} from "react-redux";
import {ALL, collectOptions} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 1;

const mapStateToProps = state => {
    return {
        id: "modeles",
        label: "Modèle",
        allLabel: "Tous les modèles",
        values: collectOptions(
            state.vehiculier.vehicules,
            state.vehiculier.selectedMarque,
            ALL,
            ALL,
            ALL,
            ALL,
            ALL,
            vehicule => vehicule.modeleLibelle,
        ),
        selectedValue: state.vehiculier.selectedModele,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: value => dispatch({
            type: "SELECT_MODELE",
            index: INDEX,
            value: value
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)