import React from 'react';
import {connect} from "react-redux";
import {ALL, SELECT_OPTION} from "../Constants";
import FILTERS from "../models/FiltersDefinition";

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
    let {vehicules, selectedIndex,selections} = state.vehiculier;
    let index = ownProps.index;
    let filter = FILTERS[index];
    let enabled = index <= selectedIndex + 1;
    return {
        id: filter.id,
        label: filter.label,
        allLabel: filter.allLabel,
        values: enabled ? collectOptions(vehicules, selections, index, filter.collector) : [],
        selectedValue: enabled ? selections[index] : ALL,
        enabled: enabled,
    };
};

export const collectOptions = (vehicules, selections, currentIndex, collector) =>
    [...new Set(
        vehicules
            .filter(vehicule => FILTERS.reduce((accumulator, filter, index) =>
                    accumulator && (currentIndex <= index || filter.collector(vehicule) === selections[index]), true))
            .map(vehicule => collector(vehicule))
    )].sort();

const mapDispatchToProps = (dispatch, ownProps) => {
    let index = ownProps.index;
    return {
        updateValue: value => dispatch({
            type: SELECT_OPTION,
            index: index,
            value: value,
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)