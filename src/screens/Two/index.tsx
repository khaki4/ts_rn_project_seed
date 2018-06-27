import React, {Component} from 'react';
import { connect } from 'react-redux';
import { goBack } from "../../redux/modules/navigation";
import Second from '../../component/Second';

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		goBack: () => {
			dispatch(goBack());
		}
	};
};

export default connect(null, mapDispatchToProps)(Second);
