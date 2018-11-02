import {connect} from "react-redux";
import {ALL, collectOptions} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 2;

const mapStateToProps = state => {
    return {
        id: "boites",
        label: "Boîte de vitesses",
        allLabel: "Toutes les boites",
        values: collectOptions(
            state.vehiculier.vehicules,
            state.vehiculier.selectedMarque,
            state.vehiculier.selectedModele,
            ALL,
            ALL,
            ALL,
            ALL,
            vehicule => vehicule.boiteVitesses,
        ),
        selectedValue: state.vehiculier.selectedBoite,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: value => dispatch({
            type: "SELECT_BOITE",
            index: INDEX,
            value: value
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)