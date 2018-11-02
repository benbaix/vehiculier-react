import {connect} from "react-redux";
import {uniqueSortedItems} from "../Utils";
import FilterSelect from "../components/FilterSelect";


const mapStateToProps = state => {
    return {
        allLabel: "Tous les modèles",
        values: collectModeles(state.vehiculier.vehicules),
        selectedValue: state.vehiculier.selectedModele
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: modele => dispatch({
            type: "SELECT_MODELE",
            modele: modele
        })
    }
};

export const collectModeles = (vehicules) => uniqueSortedItems(vehicules.map(vehicule => vehicule.modeleLibelle));

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)