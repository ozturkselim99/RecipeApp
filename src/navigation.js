import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import SignIn from './views/Auth/SignIn';
import RegisterScreen from './views/Auth/Register';
import VerificationScreen from './views/Auth/VerificationCode';
import ResetPasswordScreen from './views/ResetPassword';
import PasswordVerificationScreen from './views/Auth/PasswordVerification';
import PasswordRecoveryScreen from './views/Auth/ForgotPassword';
import HomeScreen from './views/Home';
import TabBar from './components/TabBar';
import SearchScreen from './views/Search';
import UploadScreen from './views/Upload';
import NotificationScreen from './views/Notifications';
import ProfileScreen from './views/Profile/Profile';
import DetailRecipe from './views/RecipeDetail/DetailRecipe';
import FollowingScreen from './views/Following';
import FollowersScreen from './views/Followers';
import EditProfileScreen from './views/EditProfile';
import EditPasswordScreen from './views/EditPassword';
import WelcomeScreen from './views/Welcome';
import CategoryDetailScreen from './views/CategoryDetail';

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();

function HomeGroup() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={'Home'} component={HomeScreen} />
      <HomeStack.Screen name={'Profile'} component={ProfileScreen} />
      <HomeStack.Screen
        name={'CategoryDetail'}
        component={CategoryDetailScreen}
      />
    </HomeStack.Navigator>
  );
}

function Profile() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name={'Profile'} component={ProfileScreen} />
      <ProfileStack.Screen name={'Following'} component={FollowingScreen} />
      <ProfileStack.Screen name={'Followers'} component={FollowersScreen} />
      <ProfileStack.Screen name={'EditProfile'} component={EditProfileScreen} />
      <ProfileStack.Screen
        name={'EditPassword'}
        component={EditPasswordScreen}
      />
    </ProfileStack.Navigator>
  );
}

function NotificationSt() {
  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <NotificationStack.Screen
        name={'Notifications'}
        component={NotificationScreen}
      />
    </NotificationStack.Navigator>
  );
}

function Auth() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name={'Login'} component={SignIn} />
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
      <Tab.Screen name="Home" component={HomeGroup} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Upload" component={UploadScreen} />
      <Tab.Screen name="Notifications" component={NotificationSt} />
      <Tab.Screen name="Profile" component={Profile} />
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
        <MainStack.Screen name="Welcome" component={WelcomeScreen} />
        <MainStack.Screen name="Main" component={MainTab} />
        <MainStack.Screen name="RecipeDetail" component={DetailRecipe} />
        <MainStack.Screen name="Auth" component={Auth} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
