import {signedInRoutes} from 'constants/routes';
import {useAtom} from 'jotai/react';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {userAtom} from 'state/authAtom';
import {HomeScreenNavigationProps} from 'types/navigationTypes';

const HomeScreen = ({navigation}: HomeScreenNavigationProps) => {
  const [user] = useAtom(userAtom);
  console.log(user.age);
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
