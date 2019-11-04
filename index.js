/**
 * @format
 */

import {AppRegistry} from 'react-native';
import navigation from './app/config/navigation';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// def supportLibVersion = safeExtGet('supportLibVersion', '28.0.0')