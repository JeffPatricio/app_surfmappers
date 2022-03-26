import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './translations/en';
import { ptBR } from './translations/pt-BR';

const resources = {
  en: {
    translation: en,
  },
  'pt-BR': {
    translation: ptBR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
