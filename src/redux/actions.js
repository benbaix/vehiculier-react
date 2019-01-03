export const SELECT_OPTION = "SELECT_OPTION";

const selectOption = (index, value) => ({
    type: SELECT_OPTION,
    index: index,
    value: value,
});

export const UPDATE_MODELES = "UPDATE_MODELE";

const updateModeles = values => ({
    type: UPDATE_MODELES,
    values: values,
});

export const UPDATE_VEHICULES = "UPDATE_VEHICULES";

const updateVehicules = values => ({
    type: UPDATE_VEHICULES,
    values: values,
});

export {selectOption, updateModeles, updateVehicules}