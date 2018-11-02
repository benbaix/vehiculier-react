import {connect} from "react-redux";
import {collectOptions} from "../Utils";
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
            "all",
            vehicule => vehicule.puissance,
        ),
        selectedValue: state.vehiculier.selectedPuissance,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: puissance => dispatch({
            type: "SELECT_PUISSANCE",
            index: INDEX,
            puissance: puissance
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)