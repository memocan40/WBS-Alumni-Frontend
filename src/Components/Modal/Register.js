import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Loader from '../Loader';

import './style.css';
  

export default function Register() {
  const history = useHistory();

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [pw, setPw] = useState('');
  let [showAlertEm, setShowAlertEm] = useState(false);
  let [showAlertUn, setShowAlertUn] = useState(false);

  let [loading, setloading] = useState(false);

  let data = { user: name, email: email, password: pw };

  let createuser = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await axios.post(
        `https://hidden-shelf-31461.herokuapp.com/users/register`,
        data
      );
      if (response.data.constraint === 'users_email_key') {
        setloading(false);
        setShowAlertEm(true);
      } else if (response.data.constraint === 'users_username_key') {
        setloading(false);
        setShowAlertUn(true);
      } else {
        setloading(false);
        history.push('/login');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const { t, i18n } = useTranslation();

  if (loading) {
    return <Loader />;
  } else {
    return (
      <form className="form-content-container"> 
        <h1 className="form-heading">{t('register.label')}</h1>
        <div class={showAlertUn ? "username-alert" : "not-alert"}>
          Username is already taken
        </div>
        <div class={showAlertEm ? "email-alert" : "not-alert"}>
          Email is already taken
        </div>
        <div className="form-input-container">
          <label for="username" id="username" className="form-input-label">
            {t('name.label')}
          </label>
          <input
            className="form-input"
            type="text"
            placeholder={t('entername.label')}
            name="username"
            id="username"
            onChange={(event) => {
              setName(event.target.value);
            }}
            required="required"/>
        </div>
        <div className="form-input-container">
          <label for="email" className="form-input-label">
            {t('email.label')}
          </label>
          <input
            className="form-input"
            type="text"
            placeholder={t('enteremail.label')}
            name="email"
            id="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required="required"/>
        </div>
        <div className="form-input-container">
          <label for="psw" className="form-input-label">
            {t('password.label')}
          </label>
          <input
            className="form-input"
            type="password"
            placeholder={t('enterpassword.label')}
            name="psw"
            id="psw"
            onChange={(event) => {
              setPw(event.target.value);
            }}
            required="required"/>
        </div>


        <div className="landing-page-btn-wrapper">  {/* Register Button*/}
          <button type="submit" className="back-btn" onClick={createuser}>
           {t('register.label')}
          </button>
        <Link className="form-redirection-link" to="/">    {/* Back Button*/}
          <button type="submit" className="register-btn" >
          {t('back.label')}
          </button>
         </Link>
       </div>
       
        <div className="form-redirection">
          {t('haveanacc.label')}{' '}
          <Link className="form-redirection-link" to="/login">
            {t('login.label')}
          </Link>
        </div>
      </form>
    );
  }
}
