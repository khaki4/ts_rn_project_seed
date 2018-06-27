import { connect } from 'react-redux';
import {reduxifyNavigator} from "react-navigation-redux-helpers";
import {AppNavigator} from "../../navigator/AppNavigator";

const App = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = (state) => {
	return {
		state: state.nav,
	};
};

export default connect(mapStateToProps)(App);
