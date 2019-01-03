import {ALL} from "../constants";
import FILTERS from "../models/FiltersDefinition";
import {MARQUES} from "../models/Marques";
import {SELECT_OPTION, UPDATE_MODELES, UPDATE_VEHICULES} from "./actions";

const initialState = {
    marques: MARQUES,
    modeles: [],
    vehicules: [],
    selectedIndex: -1,
    selections: Array(FILTERS.length).fill(ALL),
};

const vehiculier = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MODELES:
            return {
                ...state,
                modeles: action.values,
                vehicules: [],
            };
        case UPDATE_VEHICULES:
            return {
                ...state,
                vehicules: action.values,
            };
        case SELECT_OPTION:
            let {index, value} = action;
            state.selections[index] = value;
            state.selections.fill(ALL, index + 1, FILTERS.length);
            return {
                ...state,
                selectedIndex: value === ALL ? index - 1 : index,
            };
        default:
            return state;
    }
};

export default vehiculier;
