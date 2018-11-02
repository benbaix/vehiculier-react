import {connect} from "react-redux";
import {uniqueSortedItems} from "../Utils";
import FilterSelect from "../components/FilterSelect";


const mapStateToProps = state => {
    return {
        id: "marques",
        label: "Marque",
        allLabel: "Toutes les marques",
        values: collectMarques(state.vehiculier.vehicules),
        selectedValue: state.vehiculier.selectedMarque
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: marque => dispatch({
            type: "SELECT_MARQUE",
            marque: marque
        })
    }
};

export const collectMarques = (vehicules) => uniqueSortedItems(vehicules.map(vehicule => vehicule.marqueLibelle));

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)