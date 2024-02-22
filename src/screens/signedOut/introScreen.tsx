import ToggleIcon from 'components/common/toggleIcon';
import React from 'react';
import {View, Text} from 'react-native';
import BussinessIconActive from 'assets/svg/toggleableIcons/selected/tab_business.svg';
import BussinessIconInactive from 'assets/svg/toggleableIcons/unselected/tab_business.svg';

const IntroScreen = () => {
  return (
    <View>
      <ToggleIcon
        isActive={true}
        inactiveIcon={<BussinessIconInactive width={32} height={32} />}
        activeIcon={<BussinessIconActive width={32} height={32} />}
      />
      <Text style={{fontSize: 24, color: 'black'}}>Intro Screen</Text>
    </View>
  );
};

export default IntroScreen;
