import {useNavigation} from '@react-navigation/native';
import {signedInRoutes} from 'constants/routes';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {NavigationType} from 'types/navigation';

type Props = {
  title: string;
};

const Button = ({title}: Props) => {
  const navigation = useNavigation<NavigationType>();
  navigation.navigate(signedInRoutes.USER_PROFILE_SCREEN, {userId: 'asdf1234'});
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Button;
