import {connect} from "react-redux";
import {ALL, collectOptions} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 5;

const mapStateToProps = state => {
    return {
        id: "puissances",
        label: "Puissance",
        allLabel: "Toutes les puissances",
        values: collectOptions(
            state.vehiculier.vehicules,
            state.vehiculier.selectedMarque,
            state.vehiculier.selectedModele,
            state.vehiculier.selectedBoite,
            state.vehiculier.selectedCarburant,
            state.vehiculier.selectedCarrosserie,
            ALL,
            vehicule => vehicule.puissance,
        ),
        selectedValue: state.vehiculier.selectedPuissance,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: value => dispatch({
            type: "SELECT_PUISSANCE",
            index: INDEX,
            value: value
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)