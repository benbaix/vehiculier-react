import {connect} from "react-redux";
import {uniqueSortedItems} from "../Utils";
import FilterSelect from "../components/FilterSelect";


const mapStateToProps = state => {
    return {
        id: "puissances",
        label: "Puissance",
        allLabel: "Toutes les puissances",
        values: collectPuissances(state.vehiculier.vehicules),
        selectedValue: state.vehiculier.selectedPuissance
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: puissance => dispatch({
            type: "SELECT_PUISSANCE",
            puissance: puissance
        })
    }
};

export const collectPuissances = (vehicules) => uniqueSortedItems(vehicules.map(vehicule => vehicule.puissance));

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)