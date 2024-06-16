import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {authRoutes, signedInRoutes, tabRoutes} from 'constants/routes';

//**** Signin Navigation ****//
export type SignedInStackParamList = {
  //tabs
  [tabRoutes.HOME_TAB]: undefined;
  [tabRoutes.LIBRARY_TAB]: undefined;
  [tabRoutes.CALENDAR_TAB]: undefined;
  [tabRoutes.BRAND_TAB]: undefined;
  [tabRoutes.PLACEHOLDER_TAB]: undefined;
  //screens
  [signedInRoutes.TAB_NAVIGATOR]: undefined;
  [signedInRoutes.HOME_SCREEN]: undefined;
  [signedInRoutes.SETTINGS_SCREEN]: undefined;
  [signedInRoutes.USER_PROFILE_SCREEN]: {
    userId: string;
  };
};

//use for useNavigation
export type SigninNavigationType =
  NativeStackNavigationProp<SignedInStackParamList>;

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
//**** Signin Navigation ****//

//**** Auth Navigation ****//
export type AuthStackParamList = {
  [authRoutes.INTRO_SCREEN]: undefined;
};

export type AuthNavigationType = NativeStackNavigationProp<AuthStackParamList>;
//**** Auth Navigation ****//
