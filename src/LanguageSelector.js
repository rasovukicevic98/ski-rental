import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <select onChange={(e) => i18n.changeLanguage(e.target.value)} defaultValue="en">
      <option value="en">English</option>
      <option value="cnr">Crnogorski</option>
      <option value="sq">Shqip</option>
      <option value="ru">Русский</option>
    </select>
  );
};

export default LanguageSelector;