import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  return (
    <div class="form-content-container">
      <h1 className="form-heading">Register</h1>
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
        <label for="email" className="form-input-label">
          Email:
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
      <button type="submit" class="form-btn">
        Register
      </button>
      <div class="form-redirection">
        Have an account ? <Link className="form-redirection-link" to="/login">Log-in</Link>
      </div>
    </div>
  );
}
