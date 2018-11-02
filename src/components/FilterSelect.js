import React from 'react';
import {ALL} from "../Utils";

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

export default FilterSelect;