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
        <h3 className="landing-page-subheading">{t('welcome.label')}</h3>
        <h1 className="landing-page-heading">
          WBS <span class="lighter-font">Alumni</span>
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
