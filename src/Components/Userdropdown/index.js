import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './style.css';

export default function UserDropdown() {
  const { t, i18n } = useTranslation();
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
        <Link className="dropdown-link" to="/">
          <i class="fas fa-sign-out-alt"></i>
          {t('logout.label')}
        </Link>
      </Dropdown.Item>
    </DropdownButton>
  );
}
