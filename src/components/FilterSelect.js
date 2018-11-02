import React from 'react';

const FilterSelect = ({id, label, allLabel, values, selectedValue, updateValue}) =>
    (
        <div className="col">
            <label htmlFor={id}>{label}</label>
            <select id={id} className="form-control" value={selectedValue}
                    onChange={event => updateValue(event.target.value)}>
                <option value="all">{allLabel}</option>
                {values.map((value, index) =>
                    <option key={index} value={value}>{value}</option>
                )}
            </select>
        </div>
    );

export default FilterSelect;