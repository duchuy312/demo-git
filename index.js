/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import beginNavigation from './navigation/begintohome';
import Begin from './src/beginScreen';

AppRegistry.registerComponent(appName, () => beginNavigation);
