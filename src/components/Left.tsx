import React from "react";
import { TouchableHighlight, Text } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import * as fromNavi from "../reducers/navigation";

const Left =  ({ requestGoBack }) => (
  <TouchableHighlight onPress={requestGoBack}>
    <Text>BACK BTN</Text>
  </TouchableHighlight>
);

export default connect(
	null, {
		requestGoBack: fromNavi.requestGoBack
	})(Left);
