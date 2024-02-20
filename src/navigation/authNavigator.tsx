import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {authRoutes} from 'constants/routes';
import React from 'react';
import IntroScreen from 'screens/signedOut/introScreen';

export type SignedInStackParamList = {
  [authRoutes.INTRO_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<SignedInStackParamList>();

const headerOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerBackVisible: false,
  headerShadowVisible: false,
};

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...headerOptions,
        }}>
        <Stack.Screen name={authRoutes.INTRO_SCREEN} component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
