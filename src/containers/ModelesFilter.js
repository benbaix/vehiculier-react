import {connect} from "react-redux";
import {collectOptions} from "../Utils";
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
            "all",
            "all",
            "all",
            "all",
            "all",
            vehicule => vehicule.modeleLibelle,
        ),
        selectedValue: state.vehiculier.selectedModele,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: modele => dispatch({
            type: "SELECT_MODELE",
            index: INDEX,
            modele: modele
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)