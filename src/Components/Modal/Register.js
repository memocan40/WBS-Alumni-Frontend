import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import Api from '../../Api/Api';

import Loader from '../Loader';

import './style.css';

export default function Register() {
  const history = useHistory();

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [pw, setPw] = useState('');

  let [loading, setloading] = useState(false);

  let data = { user: name, email: email, password: pw };
  console.log(data);

  let createuser = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      await Api.createNewuser(data);
      history.push("/login");
    } catch (err) {
      console.error(err)
    }
  };

  const { t, i18n } = useTranslation();

  if (loading) {
    return <Loader />;
  } else {
    return (
      <form className="form-content-container">
        <h1 className="form-heading">Register</h1>
        <div className="form-input-container">
          <label for="username" id="username" className="form-input-label">
            {t('name.label')}
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter username"
            name="username"
            id="username"
            onChange={(event) => {
              setName(event.target.value);
            }}
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
            onChange={(event) => {
              setEmail(event.target.value);
            }}
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
            onChange={(event) => {
              setPw(event.target.value);
            }}
            required></input>
        </div>
        <button type="post" className="form-btn" onClick={createuser}>
          {t('register.label')}
        </button>
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
