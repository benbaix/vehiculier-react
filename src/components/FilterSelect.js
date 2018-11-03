import React from 'react';
import {connect} from "react-redux";
import {ALL, SELECT_OPTION} from "../Utils";
import {getAllLabel, getCollector, getFilters, getId, getLabel} from "../models/FiltersDefinition";

const FilterSelect = ({id, label, allLabel, values, selectedValue, updateValue, enabled}) =>
    (
        <div className="col">
            <label htmlFor={id}>{label}</label>
            <select id={id} className="form-control" value={selectedValue} disabled={!enabled}
                    onChange={event => updateValue(event.target.value)}>
                <option value={ALL}>{allLabel}</option>
                {values.map((value, index) =>
                    <option key={index} value={value}>{value}</option>
                )}
            </select>
        </div>
    );

const mapStateToProps = (state, ownProps) => {
    let index = ownProps.index;
    let enabled = index <= state.vehiculier.selectedIndex + 1;
    return {
        id: getId(index),
        label: getLabel(index),
        allLabel: getAllLabel(index),
        values: enabled ? collectOptions(state.vehiculier.vehicules, state.vehiculier.selections, index) : [],
        selectedValue: enabled ? state.vehiculier.selections[index] : ALL,
        enabled: enabled
    };
};

export const collectOptions = (vehicules, selections, currentIndex) =>
    [...new Set(
        vehicules
            .filter(vehicule => {
                return getFilters().reduce((accumulator, filter, index) =>
                    accumulator && (currentIndex <= index || filter.collector(vehicule) === selections[index]), true);
            })
            .map(vehicule => getCollector(currentIndex)(vehicule))
    )].sort();

const mapDispatchToProps = (dispatch, ownProps) => {
    let index = ownProps.index;
    return {
        updateValue: value => dispatch({
            type: SELECT_OPTION,
            index: index,
            value: value
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)