import React, {Component} from 'react';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import './mock/vehicules';
import vehiculier from "./redux/vehiculier";
import FilterSelect from "./components/FilterSelect";
import VehiculesTable from "./components/VehiculesTable";
import FILTERS from "./models/FiltersDefinition";

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
                                {FILTERS.map((filter, index) => <FilterSelect key={index} index={index}/>)}
                            </div>
                        </div>
                        <VehiculesTable/>
                    </>
                </Provider>
            </div>
        );
    }
}

export default App;
