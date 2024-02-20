import SignedInNavigator from './navigation/signedInNavigator';
import AuthNavigator from './navigation/authNavigator';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationState} from './constants/navigationState';

const navigationState: NavigationState = NavigationState.SIGNED_OUT;

function App(): React.JSX.Element {
  const selectNavgator = () => {
    switch (navigationState) {
      case NavigationState.SIGNED_IN:
        return <SignedInNavigator />;
      case NavigationState.SIGNED_OUT:
        return <AuthNavigator />;
      default:
        break;
    }
  };
  return <SafeAreaView style={{flex: 1}}>{selectNavgator()}</SafeAreaView>;
}

export default App;
