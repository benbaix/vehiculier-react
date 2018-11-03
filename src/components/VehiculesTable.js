import React from 'react';
import {connect} from "react-redux";
import {ALL} from "../Constants";
import FILTERS from "../models/FiltersDefinition";

const VehiculesTable = ({vehicules}) =>
    (
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    {FILTERS.map((filter, index) => <th key={index}>{filter.label}</th>)}
                </tr>
            </thead>
            <tbody>
                {vehicules.map((vehicule, index) =>
                    <tr key={index}>
                        {FILTERS.map((filter, index) => <td key={index}>{filter.collector(vehicule)}</td>)}
                    </tr>
                )}
            </tbody>
        </table>
    );


const mapStateToProps = state => {
    return {
        vehicules: filterVehicules(state.vehiculier.vehicules, state.vehiculier.selections)
    };
};

export const filterVehicules = (vehicules, selections) =>
    vehicules.filter(vehicule => FILTERS.reduce((accumulator, filter, index) =>
        accumulator && (selections[index] === ALL || filter.collector(vehicule) === selections[index]), true));

export default connect(mapStateToProps)(VehiculesTable)
