import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './style.css';

export default function UserDropdown() {
  const { t, i18n } = useTranslation();
  const history = useHistory();


  const logout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/users/logout`
      );
      if (response) {
        console.log(response);
        history.push('/');

      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <DropdownButton
      id="dropdown-basic"
      variant="secondary"
      className="user-dropdown"
      title="&#9660;">
      <Dropdown.Item>
        <Link className="dropdown-link" to="/profile">
          <i class="far fa-user-circle"></i>
          {t('profile.label')}
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <button onClick={logout} className="dropdown-link">
          <i class="fas fa-sign-out-alt"></i>
          {t('logout.label')}
        </button>
      </Dropdown.Item>
    </DropdownButton>
  );
}
