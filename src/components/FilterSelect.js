import React from 'react';

const FilterSelect = ({allLabel, values, selectedValue, updateValue}) =>
    (
        <div className="col">
            <select className="form-control" value={selectedValue} onChange={event => updateValue(event.target.value)}>
                <option value="all">{allLabel}</option>
                {values.map((value, index) =>
                    <option key={index} value={value}>{value}</option>
                )}
            </select>
        </div>
    );

export default FilterSelect;