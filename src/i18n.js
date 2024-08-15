import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        translation: {
          //Navbar
          "Home": "Startseite",
          "About": "Über uns",
          "Services": "Service",
          "Projects": "Projekte",
          "Contact": "Kontakt"
        }
      },
      en: {
        //Navbar
        translation: {
         "Home": "Home",
         "About": "About",
         "Services": "Services",
         "Projects": "Projects",
         "Contact": "Contact"
        }
      },
      al: {
        translation: {
        //Navbar
          "Home": "Ballina",
          "About": "Rreth Nesh",
          "Services": "Shërbimet",
          "Projects": "Projektet",
          "Contact": "Kontakti"
        }
      }
    },
    lng: 'de', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
