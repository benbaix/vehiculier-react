import VEHICULES from "../mock/vehicules";
import {ALL, SELECT_OPTION} from "../Utils";

const NB_FILTERS = 6;

const initialState = {
    vehicules: VEHICULES,
    selectedIndex: -1,
    selections: Array(NB_FILTERS).fill(ALL),
};

const vehiculier = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_OPTION:
            state.selections[action.index] = action.value;
            state.selections.fill(ALL, action.index + 1, NB_FILTERS);
            return {
                ...state,
                selectedIndex: action.value === ALL ? action.index - 1 : action.index,
            };
        default:
            return state;
    }
};

export default vehiculier;
