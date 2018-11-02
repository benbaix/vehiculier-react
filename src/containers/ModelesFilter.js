import {connect} from "react-redux";
import {uniqueSortedItems} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 1;

const mapStateToProps = state => {
    return {
        id: "modeles",
        label: "Modèle",
        allLabel: "Tous les modèles",
        values: collectModeles(state.vehiculier.vehicules),
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

export const collectModeles = (vehicules) => uniqueSortedItems(vehicules.map(vehicule => vehicule.modeleLibelle));

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)