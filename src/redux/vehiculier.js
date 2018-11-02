import VEHICULES from "../mock/vehicules";
import {ALL} from "../Utils";

const NB_FILTERS = 6;

const initialState = {
    vehicules: VEHICULES,
    selectedIndex: -1,
    selections: Array(NB_FILTERS).fill(ALL),
};

const vehiculier = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_MARQUE":
            state.selections[action.index] = action.value;
            state.selections.fill(ALL, action.index + 1, NB_FILTERS);
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.value, action.index),
            };
        case "SELECT_MODELE":
            state.selections[action.index] = action.value;
            state.selections.fill(ALL, action.index + 1, NB_FILTERS);
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.value, action.index),
            };
        case "SELECT_BOITE":
            state.selections[action.index] = action.value;
            state.selections.fill(ALL, action.index + 1, NB_FILTERS);
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.value, action.index),
            };
        case "SELECT_CARBURANT":
            state.selections[action.index] = action.value;
            state.selections.fill(ALL, action.index + 1, NB_FILTERS);
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.value, action.index),
            };
        case "SELECT_CARROSSERIE":
            state.selections[action.index] = action.value;
            state.selections.fill(ALL, action.index + 1, NB_FILTERS);
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.value, action.index),
            };
        case "SELECT_PUISSANCE":
            state.selections[action.index] = action.value;
            state.selections.fill(ALL, action.index + 1, NB_FILTERS);
            return {
                ...state,
                selectedIndex: getSelectedIndex(action.value, action.index),
            };
        default:
            return state;
    }
};

const getSelectedIndex = (option, index) => option === ALL ? index - 1 : index;

export default vehiculier;
