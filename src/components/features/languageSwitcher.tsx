import React from 'react';
import {View, Text, Button} from 'react-native';
import {useTranslation} from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View>
      <Text>{t('welcome')}</Text>
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="Turkish" onPress={() => changeLanguage('tr')} />
    </View>
  );
};

export default LanguageSwitcher;
