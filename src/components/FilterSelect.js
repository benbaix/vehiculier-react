import React from 'react';

const FilterSelect = ({allLabel, values, updateValue}) =>
    (
        <select onChange={event => updateValue(event.target.value)}>
            <option value={null}>{allLabel}</option>
            {values.map((value, index) =>
                <option key={index} value={value}>{value}</option>
            )}
        </select>
    );

export default FilterSelect;