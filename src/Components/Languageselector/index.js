import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";

import "./style.css";
import { DropdownItem } from "semantic-ui-react";

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
      <div class="dropdown">
        <select
          onChange={changeLanguage}
          class="dropdown-menu"
          aria-labelledby="dropdownMenuLink"
        >
          <DropdownItem>
            <option
              value="en"
              name="language"
              className="en-option"
              a
              class="dropdown-item"
            >
              English
            </option>
          </DropdownItem>
          <DropdownItem>
            <option
              value="ger"
              name="language"
              className="ger-option"
              a
              class="dropdown-item"
            >
              Deutsch
            </option>
          </DropdownItem>
        </select>
      </div>
    </DropdownButton>
  );
};

export default LanguageSelector;
