import LanguageSwitcher from 'components/features/languageSwitcher';
import {signedInRoutes} from 'constants/routes';
//import usePost from 'hooks/http/usePost';
import {useAtom} from 'jotai/react';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Button} from 'react-native';
import {userAtom} from 'state/authAtom';
import {HomeScreenNavigationProps} from 'types/navigationTypes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Config from 'react-native-config';

const HomeScreen = ({navigation}: HomeScreenNavigationProps) => {
  const [user] = useAtom(userAtom);

  const {t} = useTranslation();
  const {top} = useSafeAreaInsets();
  console.log('config', Config.ENV);
  return (
    <View style={{paddingTop: top}}>
      <Text
        style={{
          fontSize: 44,
          color: 'black',
          fontFamily: 'PlaywriteNL-ExtraLight',
          fontWeight: '100',
        }}>
        {t('home.welcomeMessage')}
      </Text>
      <Text style={{fontSize: 24, color: 'black'}}>
        {t('home.introduction')}
      </Text>
      <Button
        title="click me!"
        onPress={() =>
          navigation.navigate(signedInRoutes.USER_PROFILE_SCREEN, {
            userId: '123',
          })
        }
      />
      <LanguageSwitcher />
    </View>
  );
};

export default HomeScreen;
