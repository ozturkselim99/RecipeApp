import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from './views/Welcome.js';
import LoginScreen from './views/Login';
import RegisterScreen from './views/Register';
import VerificationScreen from './views/VerificationCode';
import ResetPasswordScreen from './views/ResetPassword';
import PasswordVerificationScreen from './views/PasswordVerification';
import PasswordRecoveryScreen from './views/ForgotPassword';
import HomeScreen from './views/Home';
import TabBar from './components/TabBar';
import SearchScreen from './views/Search';
import UploadScreen from './views/Upload';
import NotificationScreen from './views/Notification';
import ProfileScreen from './views/Profile';
import DetailRecipe from './views/DetailRecipe';

const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function Navigation() {
  const [userToken, setUserToken] = React.useState(false);

  return (
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <LoginStack.Screen name={'Welcome'} component={WelcomeScreen} />
        <LoginStack.Screen name={'Login'} component={LoginScreen} />
        <LoginStack.Screen name={'Register'} component={RegisterScreen} />
        <LoginStack.Screen
          name={'ResetPassword'}
          component={ResetPasswordScreen}
        />
        <LoginStack.Screen
          name={'PasswordVerification'}
          component={PasswordVerificationScreen}
        />

        <LoginStack.Screen
          name={'VerificationCode'}
          component={VerificationScreen}
        />
        <LoginStack.Screen
          name={'PasswordRecovery'}
          component={PasswordRecoveryScreen}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="DetailRecipe" component={DetailRecipe} />
    </HomeStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          style: {
            position: 'absolute',
          },
        }}
        initialRouteName="Home"
        tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
