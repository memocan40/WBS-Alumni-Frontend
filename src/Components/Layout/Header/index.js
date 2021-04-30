import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import UserDropdown from '../UserDropdown';
import ToggleBtn from '../../Reusable/ToggleBtn';
import LanguageSelector from '../../Reusable/LanguageSelector';

import './style.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header className="header">
      <div className="header-left">
          <img className="header-logo" src="https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:auto/h:auto/q:90/https://www.wbscodingschool.com/files/WBS-CODING-SCHOOL-logo-square.png"></img>
      </div>
      <div className="header-right">
        <div className="header-right-top-wrapper">
          <ToggleBtn />
          <LanguageSelector />
        </div>
        <div className="header-right-bottom-wrapper">
          <nav className="nav-wrapper">
            <Link to="/home/" className="nav-item">
              {t('home.label')}
            </Link>
            <Link to="/allbatches/" className="nav-item">
              {t('allbatches.label')}
            </Link>
            <Link to="/reachout/" className="nav-item">
              {t('reachout.label')}
            </Link>
          </nav>
          <div className="log-in-wrapper">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              className="user-profile-img"
            />
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}
