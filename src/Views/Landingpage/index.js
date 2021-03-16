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
        
        <h1 className="landing-page-heading">
          <img className="logo1" src="https://images-ext-1.discordapp.net/external/FaoDRqQ9jGvnDT5nh2rMzKCCOhwOwg08pjggeLuhkrg/%3Fwidth%3D1440%26height%3D379/https/media.discordapp.net/attachments/781868539765063711/814832419270164510/standard_colour_cutout_text_icon.png?width=1025&height=270"></img> <span className="lighter-font">Alumni</span>
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
