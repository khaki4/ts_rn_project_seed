import React from 'react';
import { NavigationActions } from "react-navigation";
import { Text, View, TouchableOpacity } from 'react-native';

export default (props) => {
	return (
		<View>
			<TouchableOpacity onPress={props.goSecond}>
				<Text>first onpress</Text>
			</TouchableOpacity>
		</View>
	);
};

