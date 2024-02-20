import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {signedInRoutes} from 'constants/routes';
import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';
import HomeScreen from 'screens/signedIn/homeScreen';
import SettingsScreen from 'screens/signedIn/settingsScreen';
import UserProfileScreen from 'screens/signedIn/userProfileScreen';
import {SingedInStack} from 'types/navigation';

const headerOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerBackVisible: false,
  headerShadowVisible: false,
};

const SignedInNavigator = () => {
  /* useEffect(() => {
    StatusBar.setBarStyle(settings.statusBarTheme);
  }, [settings]); */

  return (
    <NavigationContainer>
      <SingedInStack.Navigator
        screenOptions={{
          ...headerOptions,
        }}>
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
