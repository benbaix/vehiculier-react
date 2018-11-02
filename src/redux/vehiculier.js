import VEHICULES from "../mock/vehicules";
import {ALL, SELECT_OPTION} from "../Utils";
import {getNbFilters} from "../models/FiltersDefinition";

const initialState = {
    vehicules: VEHICULES,
    selectedIndex: -1,
    selections: Array(getNbFilters()).fill(ALL),
};

const vehiculier = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_OPTION:
            state.selections[action.index] = action.value;
            state.selections.fill(ALL, action.index + 1, getNbFilters());
            return {
                ...state,
                selectedIndex: action.value === ALL ? action.index - 1 : action.index,
            };
        default:
            return state;
    }
};

export default vehiculier;
