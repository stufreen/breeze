import i18next from 'i18next';
import en from '../localize/en.json';

export const initializeLocalization = () => {
  return new Promise((resolve, reject) => {
    const i18nextOptions = {
      lng: 'en',
      debug: true,
      resources: {
        en,
      },
    };

    // Use i18next to localize strings
    i18next.init(i18nextOptions, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

export const localeKeyExists = key => i18next.exists(key);

export const translate = (key, interpolation) => i18next.t(key, interpolation);

export const getLanguageKey = () => i18next.languages[0];
