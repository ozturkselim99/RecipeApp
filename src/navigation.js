import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './views/Welcome.js';
import LoginScreen from './views/Login';
import RegisterScreen from './views/Register';
import VerificationScreen from './views/VerificationCode';
import ResetPasswordScreen from './views/ResetPassword';
import PasswordVerificationScreen from './views/PasswordVerification';
import PasswordRecoveryScreen from './views/PasswordRecovery';

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
  );
}

export default Navigation;
