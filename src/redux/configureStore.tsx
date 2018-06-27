import {
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/index";
import navigation from "./modules/navigation";

interface NavState {
	nav: null;
}

const navMiddleWare = createReactNavigationReduxMiddleware(
	'root',
	(state: NavState) => state.nav,
);
const sagaMiddleware = createSagaMiddleware({});

const middlewares = [navMiddleWare, sagaMiddleware];

const appReducer = combineReducers({
	nav: navigation,
});


export const store = createStore(
	appReducer,
	applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);
