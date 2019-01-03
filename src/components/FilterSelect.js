import React, {Component} from 'react';
import {connect} from "react-redux";
import {ALL} from "../constants";
import FILTERS from "../models/FiltersDefinition";
import {selectOption} from "../redux/actions";

export class FilterSelect extends Component {

    componentDidMount() {
        this.selectValueIfUnique();
    }

    componentDidUpdate() {
        this.selectValueIfUnique();
    }

    selectValueIfUnique() {
        let {values, selectedValue, updateValue} = this.props;
        if (values.length === 1 && values[0] !== selectedValue) {
            updateValue(values[0]);
        }
    }

    render() {
        let {id, label, allLabel, values, selections, selectedValue, updateValue, enabled} = this.props;
        return (
            <div className="col">
                <label htmlFor={id}>{label}</label>
                <select id={id} className="form-control" value={selectedValue} disabled={!enabled}
                        onChange={event => updateValue(event.target.value, selections)}>
                    <option value={ALL}>{allLabel}</option>
                    {values.map((value, index) =>
                        <option key={index} value={value}>{value}</option>
                    )}
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let {selectedIndex, selections} = state.vehiculier;
    let index = ownProps.index;
    let filter = FILTERS[index];
    let enabled = index <= selectedIndex + 1;
    return {
        id: filter.id,
        label: filter.label,
        allLabel: filter.allLabel,
        values: enabled ? collectOptions(filter.options(state.vehiculier), selections, index, filter.collector) : [],
        selections: selections,
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
    let updateValues = FILTERS[index].updateValues;
    return {
        updateValue: (value, selections) => {
            dispatch(selectOption(index, value));
            if (updateValues) {
                updateValues(value, selections, dispatch);
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)