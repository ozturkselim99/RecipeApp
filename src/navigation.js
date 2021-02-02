import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './views/Welcome.js';
import LoginScreen from './views/Login';
import RegisterScreen from './views/Register';
import VerificationScreen from './views/VerificationCode';

const LoginStack = createStackNavigator();

function Navigation() {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LoginStack.Screen name={'Welcome'} component={WelcomeScreen} />
      <LoginStack.Screen name={'Login'} component={LoginScreen} />
      <LoginStack.Screen name={'Register'} component={RegisterScreen} />
      <LoginStack.Screen
        name={'VerificationCode'}
        component={VerificationScreen}
      />
    </LoginStack.Navigator>
  );
}

export default Navigation;
