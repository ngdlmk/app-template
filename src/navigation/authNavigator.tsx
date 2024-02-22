import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {authRoutes} from 'constants/routes';
import React from 'react';
import IntroScreen from 'screens/signedOut/introScreen';
import {AuthStackParamList} from 'types/navigation';

const headerOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerBackVisible: false,
  headerShadowVisible: false,
};

export const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          ...headerOptions,
        }}>
        <AuthStack.Screen
          name={authRoutes.INTRO_SCREEN}
          component={IntroScreen}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
