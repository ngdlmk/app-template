import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {signedInRoutes} from 'constants/routes';
import React from 'react';

import HomeScreen from 'screens/signedIn/homeScreen';
import SettingsScreen from 'screens/signedIn/settingsScreen';
import UserProfileScreen from 'screens/signedIn/userProfileScreen';
import TabNavigator from './tabNavigator';
import {SignedInStackParamList} from 'types/navigationTypes';

const headerOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerBackVisible: false,
  headerShadowVisible: false,
};

export const SingedInStack =
  createNativeStackNavigator<SignedInStackParamList>();

const SignedInNavigator = () => {
  return (
    <NavigationContainer>
      <SingedInStack.Navigator
        screenOptions={{
          ...headerOptions,
        }}>
        <SingedInStack.Screen
          options={{headerShown: false}}
          name={signedInRoutes.TAB_NAVIGATOR}
          component={TabNavigator}
        />
        <SingedInStack.Screen
          name={signedInRoutes.HOME_SCREEN}
          component={HomeScreen}
        />
        <SingedInStack.Screen
          name={signedInRoutes.SETTINGS_SCREEN}
          component={SettingsScreen}
        />
        <SingedInStack.Screen
          name={signedInRoutes.USER_PROFILE_SCREEN}
          component={UserProfileScreen}
        />
      </SingedInStack.Navigator>
    </NavigationContainer>
  );
};

export default SignedInNavigator;
