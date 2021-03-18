import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Loader from '../Loader';

import './style.css';

export default function Login({ setLoggedUser, loggedUser }) {
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [showAlertUn, setShowAlertUn] = useState(false);

  const [loading, setloading] = useState(false);

  const history = useHistory();

  const { t, i18n } = useTranslation();
  let data = { email: name, password: pw };

  let login = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post(
        `https://hidden-shelf-31461.herokuapp.com/users/login`,
        data
      );
      
      if (response.data.code === 401) {
        setloading(false);
        setShowAlertUn(true);
      } else {
        setLoggedUser(response.data.data);
        setloading(false);
        response.data.data.first_login ? history.push('/profile') : history.push('/home');
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <form className="form-content-container">
          <h1 className="form-heading">Log in</h1>
          <div class={showAlertUn ? "username-alert" : "not-alert"}>
          Credentials are incorrect
          </div>
          <div className="form-input-container">
            <label for="Name" id="name" className="form-input-label">
              {t('email.label')}
            </label>
            <input
              className="form-input"
              type="text"
              placeholder="Enter Name"
              name="Name"
              id="Name"
              onChange={(event) => {
                setName(event.target.value);
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
          <button type="submit" className="form-btn" onClick={login}>
            {t('login.label')}
          </button>
          <div className="form-redirection">
            {t('donthaveanacc.label')}
            <Link className="form-redirection-link" to="/register">
              {t('register.label')}
            </Link>
          </div>
        </form>
      </>
    );
  }
}
