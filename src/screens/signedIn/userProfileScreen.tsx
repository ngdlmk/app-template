import React from 'react';
import {View, Text} from 'react-native';
import {UserProfileScreenNavigationProps} from 'types/navigation';

const UserProfileScreen = ({route}: UserProfileScreenNavigationProps) => {
  console.log(route.params.userId);
  return (
    <View>
      <Text style={{fontSize: 24, color: 'black'}}>User Profile Screen</Text>
    </View>
  );
};

export default UserProfileScreen;
