import { fork } from "redux-saga/effects";
import navSaga from "./navSaga";

const sagas = [...navSaga];

export default function* root() {
  yield sagas.map(saga => fork(saga));
}
