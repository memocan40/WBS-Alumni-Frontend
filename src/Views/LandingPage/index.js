import './style.css';

import Register from '../../Components/Modal/Register.js';
import Login from '../../Components/Modal/Login.js';
import LanguageSelector from '../../Components/LanguageSelector';

import { useState } from 'react';
import { useTranslation } from 'react-i18next'

export default function LandingPageView() {
  let [toggle, settoggle] = useState(false);
  let [log, setlog] = useState(false);
  const { t, i18n } = useTranslation()

  return (
    <div className="landing-page-wrapper">
      <div className="landing-page-lang-wrapper">
        <LanguageSelector />
      </div>
      <Register className="Register" show={toggle} setshow={settoggle} />
      <Login login={log} setlogin={setlog} />
      <div
        className={
          toggle || log
            ? 'landing-page-content-wrapper2 '
            : 'landing-page-content-wrapper'
        }>
        <h3 className="landing-page-subheading">
        {t('welcome.label')}
          </h3>
        <h1 className="landing-page-heading">
          WBS <span class="lighter-font">Alumni</span>
        </h1>
        <div className="landing-page-btn-wrapper">
          <button
            onClick={() => {
              setlog(true);
            }}
            class="log-in-btn">
            Log in
          </button>
          <button
            onClick={() => {
              settoggle(true);
            }}
            class="register-btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
