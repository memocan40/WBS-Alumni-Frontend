import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './style.css';

export default function Register() {
  //const [name, setName] = useState('');
  //const [email, setEmail] = useState('');
  //const [pw, setPw] = useState('');
  const { t, i18n } = useTranslation();
  return (
    <div className="form-content-container">
      <h1 className="form-heading">Register</h1>
      <div className="form-input-container">
        <label for="Name" id="name" className="form-input-label">
        {t('name.label')}
        </label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter Name"
          name="Name"
          id="Name"
          required></input>
      </div>
      <div className="form-input-container">
        <label for="email" className="form-input-label">
        {t('email.label')}
        </label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required></input>
      </div>
      <div className="form-input-container">
        <label for="psw" className="form-input-label">
        {t('password.label')}
        </label>
        <input
          className="form-input"
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required></input>
      </div>
      <button type="submit" className="form-btn">
      {t('register.label')}
      </button>
      <div className="form-redirection">
      {t('haveanacc.label')} <Link className="form-redirection-link" to="/login">{t('login.label')}</Link>
      </div>
    </div>
  );
}
