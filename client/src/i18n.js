import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          theme: "Theme",
          register: "Register",
          welcome: "Welcome to the Form Gallery!",
          register: "Register",
          login: "Login",
          logout: "Logout",
          commentPlaceholder: "Write a comment...",
          addComment: "Add Comment",
          noComments: "No comments yet.",
          like: "Like",
          back: "Back",
        },
      },
      ru: {
        translation: {
          theme: "Тема",
          register: "Регистрация",
          welcome: "Добро пожаловать в галерею форм!",
          register: "Регистрация",
          login: "Вход",
          logout: "Выйти",
          commentPlaceholder: "Напишите комментарий...",
          addComment: "Добавить комментарий",
          noComments: "Нет комментариев.",
          like: "Лайк",
          back: "Назад",
        },
      },
    },
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
