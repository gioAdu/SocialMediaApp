import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {Routes} from './routes';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name={Routes.Home} component={Home}/>
      <Drawer.Screen name={Routes.Profile} component={Profile}/>
    </Drawer.Navigator>
  );
};

const mainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={"Drawer"} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default mainNavigation;
