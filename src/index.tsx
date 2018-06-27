import React from 'react';
import {
	createStackNavigator,
} from 'react-navigation';
import { Provider, connect } from 'react-redux';

// import 순서 변경 금지!
import { store } from './redux/configureStore'
import AppWithNavigationState from './component/App'

export default class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}
