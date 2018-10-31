import React, {Component} from 'react';
import './App.css';
import './components/VehiculesTable';
import './mock/vehicules';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import vehiculier from "./redux/vehiculier";
import PuissancesContainer from "./containers/PuissancesContainer";
import VehiculesContainer from "./containers/VehiculesContainer";

const store = createStore(
    combineReducers({vehiculier}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <>
                    <PuissancesContainer/>
                    <VehiculesContainer/>
                </>
            </Provider>
        );
    }
}

export default App;
