import { call, put, take } from "redux-saga/effects";
import * as fromNavi from "../redux/modules/navigation";
import { NavigationActions } from "react-navigation";

function* workLog(action) {
	yield alert('work');

}

export function* watchGoSecond() {
	while (true) {
		const action = yield take(fromNavi.GO_SECOND);
		yield call(workLog, action);
	}
}

export default [
	watchGoSecond,
];
