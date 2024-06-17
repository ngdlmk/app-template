import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TabNavigationButton} from './tabNavigationButton';
import {tabRoutes} from 'constants/routes';
import Icon from 'assets/svg';
import {TabItemType} from 'types/componentTypes';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const tabButtons: TabItemType[] = [
    {
      inactiveIcon: <Icon.TabHomeInactive width={32} height={32} />,
      activeIcon: <Icon.TabHomeActive width={32} height={32} />,
      routeName: tabRoutes.HOME_TAB,
    },
    {
      inactiveIcon: <Icon.TabContentInactive width={32} height={32} />,
      activeIcon: <Icon.TabContentActive width={32} height={32} />,
      routeName: tabRoutes.LIBRARY_TAB,
    },
    {
      inactiveIcon: <Icon.TabContentInactive />,
      activeIcon: <Icon.TabContentInactive />,
      routeName: tabRoutes.PLACEHOLDER_TAB,
    },
    {
      inactiveIcon: <Icon.TabCalendarInactive width={32} height={32} />,
      activeIcon: <Icon.TabCalendarActive width={32} height={32} />,
      routeName: tabRoutes.CALENDAR_TAB,
    },
    {
      inactiveIcon: <Icon.TabBusinessInactive width={32} height={32} />,
      activeIcon: <Icon.TabBusinesActive width={32} height={32} />,
      routeName: tabRoutes.BRAND_TAB,
    },
  ];
  const onPressTab = (
    index: number,
    isSelected: boolean,
    routeName?: string,
  ) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: state.routes[index].key,
      canPreventDefault: true,
    });

    if (!isSelected && !event.defaultPrevented && routeName) {
      navigation.navigate(routeName);
    }
  };

  return (
    <View style={styles.buttonContainer}>
      {tabButtons.map((tabItem, index) => {
        const isSelected = state.index === index;
        return (
          <TabNavigationButton
            key={tabItem.routeName}
            onPress={() => onPressTab(index, isSelected, tabItem.routeName)}
            activeIcon={tabItem.activeIcon}
            inactiveIcon={tabItem.inactiveIcon}
            isSelected={isSelected}
            isCustomButton={index === 2}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#00000',
    height: 96,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    paddingHorizontal: 24,
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default TabBar;
