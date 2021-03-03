import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';    

import './style.css';

export default function UserDropdown() {

  return (
    <DropdownButton id="dropdown-basic" variant="secondary" title="x">
      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Log-out</Dropdown.Item>
    </DropdownButton>
  );
}
