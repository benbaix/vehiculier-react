import React, {Component} from 'react';
import './App.css';
import './components/VehiculesTable';
import './mock/vehicules';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import vehiculier from "./redux/vehiculier";
import MarquesContainer from "./containers/MarquesFilter";
import ModelesContainer from "./containers/ModelesFilter";
import BoitesContainer from "./containers/BoitesFilter";
import CarburantsContainer from "./containers/CarburantsFilter";
import CarrosseriesContainer from "./containers/CarrosseriesFilter";
import PuissancesContainer from "./containers/PuissancesFilter";
import VehiculesContainer from "./containers/VehiculesContainer";

const store = createStore(
    combineReducers({vehiculier}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Vehicules</h1>
                <Provider store={store}>
                    <>
                        <div className="form-group">
                            <div className="row">
                                <MarquesContainer/>
                                <ModelesContainer/>
                                <BoitesContainer/>
                                <CarburantsContainer/>
                                <CarrosseriesContainer/>
                                <PuissancesContainer/>
                            </div>
                        </div>
                        <VehiculesContainer/>
                    </>
                </Provider>
            </div>
        );
    }
}

export default App;
