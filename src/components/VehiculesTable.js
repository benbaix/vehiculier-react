import React from 'react';
import {connect} from "react-redux";
import {ALL} from "../Utils";
import {getCollector, getLabel} from "../models/FiltersDefinition";

const VehiculesTable = ({vehicules}) =>
    (
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>{getLabel(0)}</th>
                    <th>{getLabel(1)}</th>
                    <th>{getLabel(2)}</th>
                    <th>{getLabel(3)}</th>
                    <th>{getLabel(4)}</th>
                    <th>{getLabel(5)}</th>
                    <th>{getLabel(6)}</th>
                </tr>
            </thead>
            <tbody>
                {vehicules.map((vehicule, index) =>
                    <tr key={index}>
                        <td>{getCollector(0)(vehicule)}</td>
                        <td>{getCollector(1)(vehicule)}</td>
                        <td>{getCollector(2)(vehicule)}</td>
                        <td>{getCollector(3)(vehicule)}</td>
                        <td>{getCollector(4)(vehicule)}</td>
                        <td>{getCollector(5)(vehicule)}</td>
                        <td>{getCollector(6)(vehicule)}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );


const mapStateToProps = state => {
    return {
        vehicules: filterVehicules(
            state.vehiculier.vehicules,
            state.vehiculier.selections,
        )
    };
};

export const filterVehicules = (vehicules, selections) => vehicules
    .filter(vehicule => selections[0] === ALL || getCollector(0)(vehicule) === selections[0])
    .filter(vehicule => selections[1] === ALL || getCollector(1)(vehicule) === selections[1])
    .filter(vehicule => selections[2] === ALL || getCollector(2)(vehicule) === selections[2])
    .filter(vehicule => selections[3] === ALL || getCollector(3)(vehicule) === selections[3])
    .filter(vehicule => selections[4] === ALL || getCollector(4)(vehicule) === selections[4])
    .filter(vehicule => selections[5] === ALL || getCollector(5)(vehicule) === selections[5]);

export default connect(mapStateToProps)(VehiculesTable)
