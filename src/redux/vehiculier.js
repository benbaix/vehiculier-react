import VEHICULES from "../mock/vehicules";

const initialState = {
    vehicules: VEHICULES
};

const vehiculier = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_PUISSANCE":
            console.log(action.puissance);
            return {...state, selectedPuissance: parseInt(action.puissance)};
        default:
            return state;
    }
};

export default vehiculier;
