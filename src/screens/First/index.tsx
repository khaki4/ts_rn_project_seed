import React from "react";
import {
	Text,
	View,
	TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import * as fromNavi from "../../reducers/navigation";
import styles from './styles';

interface IProps {
	requestGoSecond: any;
}

class Index extends React.Component<IProps, any> {
	render() {
		return (
			<View>
				<TouchableOpacity
					style={styles.button}
					onPress={this.props.requestGoSecond}
				>
				<Text>Go Second</Text>
			</TouchableOpacity>
		</View>
	)
	}
}

export default connect(
	null, {
		requestGoSecond: fromNavi.requestGoSecond
	})(Index);
