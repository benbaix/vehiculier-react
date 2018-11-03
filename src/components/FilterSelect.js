import React from 'react';
import {connect} from "react-redux";
import {ALL, SELECT_OPTION} from "../Utils";
import {getAllLabel, getCollector, getId, getLabel} from "../models/FiltersDefinition";

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
    return {
        id: getId(index),
        label: getLabel(index),
        allLabel: getAllLabel(index),
        values: collectOptions(
            state.vehiculier.vehicules,
            state.vehiculier.selections,
            index,
            getCollector(index),
        ),
        selectedValue: state.vehiculier.selections[index],
        enabled: index <= state.vehiculier.selectedIndex + 1
    };
};

export const collectOptions = (vehicules, selections, index, collector) =>
    [...new Set(
        vehicules
            .filter(vehicule => index <= 0 || getCollector(0)(vehicule) === selections[0])
            .filter(vehicule => index <= 1 || getCollector(1)(vehicule) === selections[1])
            .filter(vehicule => index <= 2 || getCollector(2)(vehicule) === selections[2])
            .filter(vehicule => index <= 3 || getCollector(3)(vehicule) === selections[3])
            .filter(vehicule => index <= 4 || getCollector(4)(vehicule) === selections[4])
            .filter(vehicule => index <= 5 || getCollector(5)(vehicule) === selections[5])
            .map(vehicule => collector(vehicule))
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