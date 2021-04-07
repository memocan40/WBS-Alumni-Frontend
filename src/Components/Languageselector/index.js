import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import "./style.css";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <DropdownButton
      id="dropdown-basic"
      variant="secondary"
      className="user-dropdown"
      title="&#9660;"
    >
      <Dropdown.Item>
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
        <img src="https://cdn.imgbin.com/20/19/5/imgbin-flag-of-the-united-kingdom-united-kingdom-j8GwBMwFyGHdWy3iAKrmv6ac2.jpg" />
      </Dropdown.Item>
      <Dropdown.Item>
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
        <img src="https://cdn.countryflags.com/thumbs/germany/flag-button-round-250.png" />
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageSelector;
