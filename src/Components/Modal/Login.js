import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Api from "../../Api/Api";
import { useHistory } from 'react-router-dom';
import axios from 'axios';


import './style.css';

export default function Login({setLoggedUser, loggedUser}) {
  let [name, setName] = useState('');
  let [pw, setPw] = useState('');

  const history = useHistory();

  console.log(name);
  console.log(pw);
  const { t, i18n } = useTranslation();
  let data = { email: name, password: pw };

  let login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/users/login`,
        data
      );
      if (response) {
        setLoggedUser(response.data.data);
        console.log(loggedUser);
        console.log(response);
        history.push('/profile');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="form-content-container">
        <h1 className="form-heading">Log in</h1>
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
    </div>
  );
}
