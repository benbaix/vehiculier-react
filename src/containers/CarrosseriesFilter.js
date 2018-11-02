import {connect} from "react-redux";
import {ALL, collectOptions} from "../Utils";
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
            ALL,
            ALL,
            vehicule => vehicule.carrosserieLibelle,
        ),
        selectedValue: state.vehiculier.selectedCarrosserie,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: value => dispatch({
            type: "SELECT_CARROSSERIE",
            index: INDEX,
            value: value
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)