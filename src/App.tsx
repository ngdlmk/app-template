import SignedInNavigator from './navigation/signedInNavigator';
import AuthNavigator from './navigation/authNavigator';
import React from 'react';
import {NavigationState} from './constants/navigationState';
import 'utils/i18n';

const navigationState: NavigationState = NavigationState.SIGNED_IN;

function App(): React.JSX.Element {
  const selectNavgator = () => {
    switch (navigationState) {
      case NavigationState.SIGNED_IN:
        return <SignedInNavigator />;
      case NavigationState.SIGNED_OUT:
        return <AuthNavigator />;
      default:
        return <AuthNavigator />;
    }
  };
  return selectNavgator();
}

export default App;
