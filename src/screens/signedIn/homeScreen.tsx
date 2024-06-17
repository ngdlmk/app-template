import LanguageSwitcher from 'components/features/languageSwitcher';
import {signedInRoutes} from 'constants/routes';
import usePost from 'hooks/http/usePost';
import {useAtom} from 'jotai/react';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Button} from 'react-native';
import {userAtom} from 'state/authAtom';
import {HomeScreenNavigationProps} from 'types/navigationTypes';

const HomeScreen = ({navigation}: HomeScreenNavigationProps) => {
  const [user] = useAtom(userAtom);
  /* const {data, error, isLoading} =
    usePost<{post: string; old: number}[]>('feeds'); */
  /* if (data) {
    console.log(data[0].post);
    console.log(error);
    console.log(isLoading);
    console.log(user.username);
  } */

  const {t} = useTranslation();
  return (
    <View>
      <Text style={{fontSize: 24, color: 'black'}}>Home Screen</Text>
      <Text style={{fontSize: 24, color: 'black'}}>{t('welcome')}</Text>
      <Text style={{fontSize: 24, color: 'black'}}>{t('hello')}</Text>
      <Button
        title="click me!"
        onPress={() =>
          navigation.navigate(signedInRoutes.USER_PROFILE_SCREEN, {
            userId: '123',
          })
        }
      />
      <Text>Language change</Text>
      <LanguageSwitcher />
    </View>
  );
};

export default HomeScreen;
