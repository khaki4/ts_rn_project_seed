import React, { Component } from 'react';
import Second from "./presentor";

export default class extends Component<any, any> {
	render() {
		return <Second {...this.props} />;
	}
}

