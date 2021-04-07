import React from "react";

import { useTranslation } from "react-i18next";

import "./style.css";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div class="dropdown">
      <select
        onChange={changeLanguage}
        class="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        <option
          value="en"
          name="language"
          className="en-option"
          a
          class="dropdown-item"
        >
          English
        </option>
        English
        <option
          value="ger"
          name="language"
          className="ger-option"
          a
          class="dropdown-item"
        >
          Deutsch
        </option>
        Deutsch
      </select>
    </div>
  );
};

export default LanguageSelector;
