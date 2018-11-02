import {connect} from "react-redux";
import {collectOptions} from "../Utils";
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
            "all",
            "all",
            "all",
            vehicule => vehicule.energieLibelle,
        ),
        selectedValue: state.vehiculier.selectedCarburant,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: carburant => dispatch({
            type: "SELECT_CARBURANT",
            index: INDEX,
            carburant: carburant
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)