import React from 'react';
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

export default VehiculesTable;
