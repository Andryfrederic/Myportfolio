/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Accueil from './src'
import Root from './src/rooting'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
