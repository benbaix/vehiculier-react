import React from 'react';

const VehiculesTable = ({vehicules}) =>
    (
        <table>
            <thead>
                <tr>
                    <th>Marque</th>
                    <th>Modele</th>
                    <th>Boîte de vitesses</th>
                    <th>Carburant</th>
                    <th>Carosserie</th>
                    <th>Puissance</th>
                </tr>
            </thead>
            <tbody>
                {vehicules.map((vehicule, index) =>
                    <tr key={index}>
                        <td>{vehicule.marqueLibelle}</td>
                        <td>{vehicule.modeleLibelle}</td>
                        <td>{vehicule.boiteVitesses}</td>
                        <td>{vehicule.energieLibelle}</td>
                        <td>{vehicule.carrosserieLibelle}</td>
                        <td>{vehicule.puissance}cv</td>
                    </tr>
                )}
            </tbody>
        </table>
    );

export default VehiculesTable;
