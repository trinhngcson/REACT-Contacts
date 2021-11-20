import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import StackNavigator from './2/routes';
// import App from './1/App';
import TabNavigator from './3/routes';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(TabNavigator);
