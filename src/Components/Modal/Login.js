import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Login() {
  //const [name, setName] = useState('');
  //const [pw, setPw] = useState('');

  return (
    <div>
      <div className="form-content-container">
        <h1 className="form-heading">Log in</h1>
        <div className="form-input-container">
          <label for="Name" id="name" className="form-input-label">
            Name:
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
          <label for="psw" className="form-input-label">
            Password:
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
          Log-in
        </button>
        <div className="form-redirection">
          Don't have and account ? <Link className="form-redirection-link" to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
