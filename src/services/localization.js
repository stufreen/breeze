import i18next from 'i18next';
import en from '../localize/en.json';

export const initializeLocalization = () => {
  const i18nextOptions = {
    lng: 'en',
    debug: true,
    resources: {
      en,
    },
  };

  // Use i18next to localize strings
  i18next.init(i18nextOptions).then(() => {
    console.log('i18next ready', i18next.t('dashboard:feelsLike'));
  });
};

export const localeKeyExists = key => i18next.exists(key);

export const translate = (key, interpolation) => i18next.t(key, interpolation);

export const getLanguageKey = () => i18next.languages[0];
