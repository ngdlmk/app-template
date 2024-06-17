import 'intl-pluralrules';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as Localization from 'react-native-localize';
import en from 'localization/en.json';
import tr from 'localization/tr.json';

const languageDetector = {
  type: 'languageDetector' as const,
  async: true,
  detect: (callback: (lng: string) => void) => {
    const bestLanguage = Localization.findBestLanguageTag(['en', 'tr']);
    callback(bestLanguage?.languageTag || 'en');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {translation: en},
      tr: {translation: tr},
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
