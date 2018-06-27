import React from "react";
import {
	Text,
	View,
	TouchableOpacity
} from "react-native";
export default (props) => {
	return (
		<View>
			<TouchableOpacity
				onPress={props.goBack}
			>
				<Text>Go Back!</Text>
			</TouchableOpacity>
		</View>
	);
};
