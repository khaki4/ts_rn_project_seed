import React, {Component} from 'react';
import { connect } from 'react-redux';
import { goSecond } from "../../redux/modules/navigation";
import First from '../../component/First';

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		goSecond: () => {
			dispatch(goSecond());
		}
	};
};

export default connect(null, mapDispatchToProps)(First);
