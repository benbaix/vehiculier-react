import {connect} from "react-redux";
import {ALL, collectOptions} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 3;

const mapStateToProps = state => {
    return {
        id: "carburants",
        label: "Carburant",
        allLabel: "Tous les carburants",
        values: collectOptions(
            state.vehiculier.vehicules,
            state.vehiculier.selectedMarque,
            state.vehiculier.selectedModele,
            state.vehiculier.selectedBoite,
            ALL,
            ALL,
            ALL,
            vehicule => vehicule.energieLibelle,
        ),
        selectedValue: state.vehiculier.selectedCarburant,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: value => dispatch({
            type: "SELECT_CARBURANT",
            index: INDEX,
            value: value
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)