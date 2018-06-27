import React, { Component } from 'react';
import First from "./presentor";

export default class extends Component<any, any> {
	componentDidMount() {
		console.log('ttt:', this.props);
	}
	render() {
		console.log('test:', this.props)
		return <First {...this.props} />;
	}
}

