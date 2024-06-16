import React from 'react';
import {
  BottomTabNavigationOptions,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import TabBar from 'components/features/bottomNavigation/tabBar';
import {SignedInStackParamList} from 'types/navigationTypes';
import {tabRoutes} from 'constants/routes';
//screens
import HomeTab from 'screens/tabs/homeTab';
import LibraryTab from 'screens/tabs/libraryTab';
import BrandTab from 'screens/tabs/brandTab';
import CalendarTab from 'screens/tabs/calendarTab';
import {View} from 'react-native';

const PlaceholderComponent = () => <View />;

const Tab = createBottomTabNavigator<SignedInStackParamList>();

const TabNavigator = () => {
  const screenOptions: BottomTabNavigationOptions = {headerShown: false};

  function tabBar(props: BottomTabBarProps) {
    return <TabBar {...props} />;
  }

  return (
    <Tab.Navigator
      initialRouteName={tabRoutes.HOME_TAB}
      screenOptions={screenOptions}
      tabBar={tabBar}>
      <Tab.Screen name={tabRoutes.HOME_TAB} component={HomeTab} />
      <Tab.Screen name={tabRoutes.LIBRARY_TAB} component={LibraryTab} />
      <Tab.Screen
        name={tabRoutes.PLACEHOLDER_TAB}
        component={PlaceholderComponent}
        listeners={() => ({
          tabPress: e => {
            e.preventDefault(); // Prevent default action (navigation)
            // Perform your custom action here, e.g., open an action sheet
            console.log('Custom action, like opening an action sheet');
          },
        })}
      />
      <Tab.Screen name={tabRoutes.CALENDAR_TAB} component={CalendarTab} />
      <Tab.Screen name={tabRoutes.BRAND_TAB} component={BrandTab} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
