import {connect} from "react-redux";
import {uniqueSortedItems} from "../Utils";
import FilterSelect from "../components/FilterSelect";


const mapStateToProps = state => {
    return {
        allLabel: "Toutes les boites",
        values: collectBoites(state.vehiculier.vehicules),
        selectedValue: state.vehiculier.selectedBoite
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: boite => dispatch({
            type: "SELECT_BOITE",
            boite: boite
        })
    }
};

export const collectBoites = (vehicules) => uniqueSortedItems(vehicules.map(vehicule => vehicule.boiteVitesses));

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)