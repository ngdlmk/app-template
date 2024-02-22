import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'assets/svg';
import ToggleIcon from 'components/common/toggleIcon';

type Props = {
  isSelected: boolean;
  isCustomButton: boolean;
  activeIcon: React.ReactElement;
  inactiveIcon: React.ReactElement;
  onPress: () => void;
};

export const TabNavigationButton = ({
  isSelected,
  activeIcon,
  inactiveIcon,
  isCustomButton,
  onPress,
}: Props) => {
  if (isCustomButton) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.customButton}>
        <Icon.Plus width={96} height={96} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.defaultButton}>
      <ToggleIcon
        isActive={isSelected}
        activeIcon={activeIcon}
        inactiveIcon={inactiveIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customButton: {
    top: -32,
  },
  defaultButton: {
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    //backgroundColor: 'purple',
  },
});
