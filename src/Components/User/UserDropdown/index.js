import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Loader from "../Reusable/Loader";

import "./style.css";
const { REACT_APP_BASE_URL } = process.env;

export default function UserDropdown() {
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const logout = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${REACT_APP_BASE_URL}users/logout`);
      if (response) {
        history.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!loading) {
    return (
      <DropdownButton
        id="dropdown-basic"
        variant="secondary"
        className="user-dropdown"
        title="&#9660;"
      >
        <Dropdown.Item>
          <Link className="dropdown-link " to="/profile">
            <i class="far fa-user-circle"></i>
            {t("profile.label")}
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <div onClick={logout} className="dropdown-link">
            <i class="fas fa-sign-out-alt"></i>
            {t("logout.label")}
          </div>
        </Dropdown.Item>
      </DropdownButton>
    );
  } else {
    return <Loader />;
  }
}
