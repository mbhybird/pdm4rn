import React, {
    AppRegistry
} from 'react-native';

console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

import App from './App';

AppRegistry.registerComponent("iPDM", () => App);