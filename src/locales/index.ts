import I18n from 'i18n-js';
import { NativeModules, Platform } from 'react-native';
import { en } from './en-US';
import { pt } from './pt-BR';

type ConfiguredLocations = {
  'pt-BR': string;
  en: string;
};

const normalizeTranslate: ConfiguredLocations = {
  'pt-BR': 'pt_BR',
  en: 'en_US',
};

const getLanguageByDevice = () => {
  if (Platform.OS === 'ios') {
    const locale =
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0];

    return locale;
  }

  if (Platform.OS === 'android') {
    return NativeModules.I18nManager.localeIdentifier;
  }
};

I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

const setLanguageToI18n = () => {
  const deviceLanguage: keyof ConfiguredLocations = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[deviceLanguage];

  if (I18n.translations.hasOwnProperty(translateNormalize)) {
    I18n.locale = translateNormalize;
    return;
  }
  I18n.locale = 'en_US';
};

setLanguageToI18n();

export const translate = (key: string) => I18n.t(key);
