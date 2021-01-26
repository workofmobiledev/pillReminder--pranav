/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import StackNavigation from './src/Navigation/index';

import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { Store } from "./src/store/Reducer/index";
import thunk from 'redux-thunk';

enableScreens();

class app extends Component {
    render() {
        return <StackNavigation />
    }
}

export default app;