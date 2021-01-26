import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { name as appName } from './app.json';
import Store from "./src/store/Reducer/index";
import {Provider} from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Store, composeEnhancers(applyMiddleware(thunk)));

class app extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
            );
    }
}

AppRegistry.registerComponent(appName, () => app);