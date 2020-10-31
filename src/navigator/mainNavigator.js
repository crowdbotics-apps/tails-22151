import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList165617Navigator from '../features/NotificationList165617/navigator';
import Settings165616Navigator from '../features/Settings165616/navigator';
import Settings165608Navigator from '../features/Settings165608/navigator';
import UserProfile165606Navigator from '../features/UserProfile165606/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList165617: { screen: NotificationList165617Navigator },
Settings165616: { screen: Settings165616Navigator },
Settings165608: { screen: Settings165608Navigator },
UserProfile165606: { screen: UserProfile165606Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
