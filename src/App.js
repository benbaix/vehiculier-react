import React, {Component} from 'react';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import './mock/vehicules';
import vehiculier from "./redux/vehiculier";
import FilterSelect from "./components/FilterSelect";
import VehiculesTable from "./components/VehiculesTable";

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
                                <FilterSelect index={0}/>
                                <FilterSelect index={1}/>
                                <FilterSelect index={2}/>
                                <FilterSelect index={3}/>
                                <FilterSelect index={4}/>
                                <FilterSelect index={5}/>
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
