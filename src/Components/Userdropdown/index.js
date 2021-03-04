import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import './style.css';

export default function UserDropdown() {
  return (
    <DropdownButton
      id="dropdown-basic"
      variant="secondary"
      className="user-dropdown"
      title="&#9660;">
      <Dropdown.Item href="/profile/">
        <i class="far fa-user-circle"></i>Profile
      </Dropdown.Item>
      <Dropdown.Item href="/">
        <i class="fas fa-sign-out-alt"></i>Log-out
      </Dropdown.Item>
    </DropdownButton>
  );
}
