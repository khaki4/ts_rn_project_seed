import { all, fork, call, put, take } from "redux-saga/effects";
import * as fromNavi from "../reducers/navigation";
import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../navigator/AppNavigator";
function* goBack(action) {
  console.log("work Back");
  yield put(NavigationActions.back(action));
}
function* goFirst(action) {
  console.log("work goDetail");
  yield put(NavigationActions.navigate({ routeName: "First" }));
}
function* goSecond(action) {
  console.log("work goLogin");
  yield put(NavigationActions.navigate({ routeName: "Second" }));
}


export function* watchGoBack() {
  while (true) {
    console.log("saga watch watchGoBack");
    const action = yield take(fromNavi.GO_BACK);
    yield call(goBack, action);
  }
}

export function* watchGoFirst() {
  while (true) {
    console.log("saga watch watchGoFirst");
    const action = yield take(fromNavi.GO_FIRST);
    yield call(goFirst, action);
  }
}

export function* watchGoSecond() {
  while (true) {
    console.log("saga watch watchGoSecond");
    const action = yield take(fromNavi.GO_SECOND);
    yield call(goSecond, action);
  }
}

export default [
	watchGoBack,
	watchGoFirst,
	watchGoSecond,
];
