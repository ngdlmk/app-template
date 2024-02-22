import {SvgProps} from 'react-native-svg';

export type TabItemType = {
  inactiveIcon: React.ReactElement<SvgProps>;
  activeIcon: React.ReactElement<SvgProps>;
  routeName: string;
};
