import {connect} from "react-redux";
import {collectOptions} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 4;

const mapStateToProps = state => {
    return {
        id: "carrosseries",
        label: "Carrosserie",
        allLabel: "Toutes les carrosseries",
        values: collectOptions(
            state.vehiculier.vehicules,
            state.vehiculier.selectedMarque,
            state.vehiculier.selectedModele,
            state.vehiculier.selectedBoite,
            state.vehiculier.selectedCarburant,
            "all",
            "all",
            vehicule => vehicule.carrosserieLibelle,
        ),
        selectedValue: state.vehiculier.selectedCarrosserie,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: carrosserie => dispatch({
            type: "SELECT_CARROSSERIE",
            index: INDEX,
            carrosserie: carrosserie
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)