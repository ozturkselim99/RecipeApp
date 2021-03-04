import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

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
import HeaderBackButton from '@react-navigation/stack';
import FollowingScreen from './views/Following';
import FollowersScreen from './views/Followers';
import MustLogin from './views/MustLogin';
import AuthContext from './context/AuthContext';

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();

function HomeSt() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={'Home'} component={HomeScreen} />
      <HomeStack.Screen name={'Profile'} component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}

function ProfileSt() {
  const {isLogged} = React.useContext(AuthContext);

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLogged ? (
        <>
          <ProfileStack.Screen
            name={'ProfileDetail'}
            component={ProfileScreen}
          />
          <ProfileStack.Screen name={'Followers'} component={FollowersScreen} />
          <ProfileStack.Screen name={'Following'} component={FollowingScreen} />
        </>
      ) : (
        <ProfileStack.Screen name={'MustLogin'} component={MustLogin} />
      )}
    </ProfileStack.Navigator>
  );
}

function NotificationSt() {
  const {isLogged} = React.useContext(AuthContext);
  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLogged ? (
        <NotificationStack.Screen
          name={'Notifications'}
          component={NotificationScreen}
        />
      ) : (
        <NotificationStack.Screen name={'MustLogin'} component={MustLogin} />
      )}
    </NotificationStack.Navigator>
  );
}

function Auth() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {shadowColor: 'transparent'},
      }}
      options={({navigation, route}) => ({
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            onPress={() => navigation.navigate('Home')}
          />
        ),
      })}>
      <MainStack.Screen name={'Login'} component={LoginScreen} />
      <AuthStack.Screen name={'Register'} component={RegisterScreen} />
      <AuthStack.Screen
        name={'ResetPassword'}
        component={ResetPasswordScreen}
      />
      <AuthStack.Screen
        name={'PasswordVerification'}
        component={PasswordVerificationScreen}
      />

      <AuthStack.Screen
        name={'VerificationCode'}
        component={VerificationScreen}
      />
      <AuthStack.Screen
        name={'PasswordRecovery'}
        component={PasswordRecoveryScreen}
      />
    </AuthStack.Navigator>
  );
}

function MainTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
        },
      }}
      initialRouteName="Home"
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeSt} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Upload" component={UploadScreen} />
      <Tab.Screen name="Notification" component={NotificationSt} />
      <Tab.Screen name="ProfileTab" component={ProfileSt} />
    </Tab.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="Main" component={MainTab} />
        <MainStack.Screen name="DetailRecipe" component={DetailRecipe} />
        <MainStack.Screen name="Auth" component={Auth} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
