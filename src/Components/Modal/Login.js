import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Api from "../../Api/Api";

import './style.css';

export default function Login() {
  let [name, setName] = useState('');
  let [pw, setPw] = useState('');
  const { t, i18n } = useTranslation();
  let data={user:name,password:pw};

  let login=()=>{Api.logIn(data);}
  return (
    <div>
      <div className="form-content-container">
        <h1 className="form-heading">Log in</h1>
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
            onChange={(event)=>{setName(event.target.value)}}
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
            onchange={(event)=>{setPw(event.target.value)}}
            required></input>
        </div>
        <button type="submit" className="form-btn" onClick={login}>
        {t('login.label')}
        </button>
        <div className="form-redirection">
        {t('donthaveanacc.label')}<Link className="form-redirection-link" to="/register">{t('register.label')}</Link>
        </div>
      </div>
    </div>
  );
}
