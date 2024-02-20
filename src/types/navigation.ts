import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
//import TabNavigator from './tabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {signedInRoutes} from 'constants/routes';

export type SignedInStackParamList = {
  //[Routes.TAB_NAVIGATOR]: { screen: Routes };
  [signedInRoutes.HOME_SCREEN]: undefined;
  [signedInRoutes.SETTINGS_SCREEN]: undefined;
  [signedInRoutes.USER_PROFILE_SCREEN]: {
    userId: string;
  };
};

export type NavigationType = NativeStackNavigationProp<SignedInStackParamList>;

//use for useNavigation
export const SingedInStack =
  createNativeStackNavigator<SignedInStackParamList>();

//use for screen props
export type HomeScreenNavigationProps = NativeStackScreenProps<
  SignedInStackParamList,
  typeof signedInRoutes.HOME_SCREEN
>;

export type SettingsScreenNavigationProps = NativeStackScreenProps<
  SignedInStackParamList,
  typeof signedInRoutes.SETTINGS_SCREEN
>;

export type UserProfileScreenNavigationProps = NativeStackScreenProps<
  SignedInStackParamList,
  typeof signedInRoutes.USER_PROFILE_SCREEN
>;
