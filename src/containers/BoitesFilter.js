import {connect} from "react-redux";
import {uniqueSortedItems} from "../Utils";
import FilterSelect from "../components/FilterSelect";

const INDEX = 2;

const mapStateToProps = state => {
    return {
        id: "boites",
        label: "Boîte de vitesses",
        allLabel: "Toutes les boites",
        values: collectBoites(state.vehiculier.vehicules),
        selectedValue: state.vehiculier.selectedBoite,
        enabled: INDEX <= state.vehiculier.selectedIndex + 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValue: boite => dispatch({
            type: "SELECT_BOITE",
            index: INDEX,
            boite: boite
        })
    }
};

export const collectBoites = (vehicules) => uniqueSortedItems(vehicules.map(vehicule => vehicule.boiteVitesses));

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)