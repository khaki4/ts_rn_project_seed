import React from 'react';
import {
  AppRegistry
} from 'react-native';

import App from './src';

const entryPoint =  () => <App />;
AppRegistry.registerComponent('ts_rn_project_seed', () => entryPoint);
