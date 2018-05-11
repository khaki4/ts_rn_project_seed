import React, { Component } from "react";
import {
  Text,
  View,
	TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import * as fromNavi from "../reducers/navigation";

interface IProps {
	requestGoBack: any;
}

class Second extends Component<IProps, any> {
  render () {
    return (
      <View>
				<TouchableOpacity
					onPress={this.props.requestGoBack}
          >
					<Text>Go Back!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(
  null, {
		requestGoBack: fromNavi.requestGoBack
  })(Second);
