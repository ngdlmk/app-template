import {signedInRoutes} from 'constants/routes';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {HomeScreenNavigationProps} from 'types/navigation';

const HomeScreen = ({navigation}: HomeScreenNavigationProps) => {
  return (
    <View>
      <Text style={{fontSize: 24, color: 'black'}}>Home Screen</Text>
      <Button
        title="click me!"
        onPress={() =>
          navigation.navigate(signedInRoutes.USER_PROFILE_SCREEN, {
            userId: '123',
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
