// Actions
const PREFIX = "counter/";
export const GO_BACK: string = `${PREFIX}GO_BACK`;
export const GO_FIRST: string = `${PREFIX}GO_FIRST`;
export const GO_SECOND: string = `${PREFIX}GO_SECOND`;

// Action Creators
export const requestGoBack = () => ({ type: GO_BACK });
export const requestGoFirst = () => ({ type: GO_FIRST });
export const requestGoSecond = () => ({ type: GO_SECOND });
