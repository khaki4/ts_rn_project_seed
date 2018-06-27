import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, NavigationActions } from 'react-navigation';
import {
  createStackNavigator,
} from 'react-navigation';

import One from "../screens/One/index";
import Two from "../screens/Two/index";


const AppRouteConfigs = {
	One: { screen: One, },
	Two: { screen: Two },
};

export const AppNavigator = StackNavigator(AppRouteConfigs);
