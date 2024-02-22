import React from 'react';
import {SvgProps} from 'react-native-svg';

type Props = {
  isActive: boolean;
  activeIcon: React.ReactElement<SvgProps>;
  inactiveIcon: React.ReactElement<SvgProps>;
};

const ToggleIcon = ({activeIcon, inactiveIcon, isActive}: Props) => {
  if (isActive) {
    return activeIcon;
  }
  return inactiveIcon;
};

export default ToggleIcon;
