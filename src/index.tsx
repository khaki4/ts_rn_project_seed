import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { StackNavigator } from 'react-navigation';
import AppWithNavigationState from './navigator/AppNavigator';

export default () => (
	<Provider store={store}>
		<AppWithNavigationState />
	</Provider>
);

