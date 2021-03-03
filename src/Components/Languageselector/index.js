import React from 'react';

import { useTranslation } from 'react-i18next';

import "./style.css";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <select onChange={changeLanguage}>
      <option value="en" name="language" className="en-option">En</option>English
      <option value="ger" name="language" className="ger-option">Ger</option> Deutsch
    </select>
  )
}

export default LanguageSelector;