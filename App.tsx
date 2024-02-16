/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 38}}>Super App</Text>
      <Button title="crash app" onPress={() => crashlytics().crash()} />
    </SafeAreaView>
  );
}

export default App;
