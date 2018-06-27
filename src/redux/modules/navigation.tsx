import { NavigationActions, StackNavigator } from "react-navigation";
import One from "../../screens/One/index";
import Two from "../../screens/Two/index";
import { AppNavigator } from '../../navigator/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('One'));

// Actions
export const GO_BACK: string = `GO_BACK`;
export const GO_SECOND: string = `GO_SECOND`;


// Action Creators
export const goBack = () => ({ type: GO_BACK });
export const goSecond = () => ({ type: GO_SECOND });

export default (state = initialState, action) => {
	switch (action.type) {
		case GO_BACK:
			return {
				...state,
				...AppNavigator.router.getStateForAction(
					NavigationActions.back()
				)
			};
		case GO_SECOND:
			return {
				...state,
				...AppNavigator.router.getStateForAction(
					NavigationActions.navigate({ routeName: 'Two' })
				)
			};
		default:
			return state;
	}
};
