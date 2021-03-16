import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './style.css';

import LanguageSelector from '../../Components/Languageselector';

export default function LandingPageView() {
  const { t, i18n } = useTranslation();

  return (
    <div className="landing-page-wrapper">
      <div className="landing-page-lang-wrapper">
        <LanguageSelector />
      </div>
      <div className="landing-page-content-wrapper">
        <h1 className="landing-page-heading-wrapper">
          <img
            className="landing-page-logo"
            src="https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:auto/h:auto/q:90/https://www.wbscodingschool.com/files/WBS-CODING-SCHOOL-logo-square.png"></img>{' '}
          <h1 className="landing-page-heading">WBS Alumni</h1>
        </h1>
        <div className="landing-page-btn-wrapper">
          <Link to="/login" class="log-in-btn">
            {t('login.label')}
          </Link>
          <Link to="/register" className="register-btn">
            {t('register.label')}
          </Link>
        </div>
      </div>
    </div>
  );
}
