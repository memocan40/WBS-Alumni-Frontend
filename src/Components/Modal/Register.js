// This is a test

// Importing packages
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader";
import { useForm } from "react-hook-form";

// Importing style
import "./style.css";

//Register Component
export default function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [showAlertEm, setShowAlertEm] = useState(false);
  const [showAlertUn, setShowAlertUn] = useState(false);
  const [loading, setloading] = useState(false);

  //Declaring the object data
  let data = { user: name, email: email, password: pw };

  //Initializing useForm
  const { register, handleSubmit, errors } = useForm();

  //Initializing useTranslation
  const { t } = useTranslation();

  // Declaring the onSubmit function
  const onSubmit = (data) => {
    if (data.user && data.email && data.password) {
      createuser();
    }
  };

  //Declaring the createuser function
  let createuser = async () => {
    try {
      setloading(true);
      const response = await axios.post(
        `https://hidden-shelf-31461.herokuapp.com/users/register`,
        data
      );

      // Server Side Validation
      if (response.data.constraint === "users_email_key") {
        console.log(response.data.constraint);
        setloading(false);
        setShowAlertEm(true);
      } else if (response.data.constraint === "users_username_key") {
        setloading(false);
        setShowAlertUn(true);
      } else {
        setloading(false);
        history.push("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <form
        className="form-content-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="form-heading">{t("register.label")}</h1>
        {/*Server side valiation errors*/}
        <div class={showAlertUn ? "username-alert" : "not-alert"}>
          Username is already taken
        </div>
        <div class={showAlertEm ? "email-alert" : "not-alert"}>
          Email is already taken
        </div>

        <div className="form-input-container">
          {/*Username Input*/}
          <label for="username" id="username" className="form-input-label">
            {t("name.label")}
          </label>
          <input
            className="form-input"
            type="text"
            placeholder={t("entername.label")}
            name="username"
            id="username"
            onChange={(event) => {
              setName(event.target.value);
            }}
            ref={register({ required: true })}
          />

          {errors.username && (
            <div className="empty-alert">Please enter your username</div>
          )}
        </div>

        {/*Email Input*/}
        <div className="form-input-container">
          <label for="email" className="form-input-label">
            {t("email.label")}
          </label>
          <input
            className="form-input"
            type="text"
            placeholder={t("enteremail.label")}
            name="email"
            id="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            ref={register({ required: true })}
          />

          {errors.email && (
            <div className="empty-alert">Please enter email</div>
          )}
        </div>

        {/*Password Input*/}
        <div className="form-input-container">
          <label for="psw" className="form-input-label">
            {t("password.label")}
          </label>
          <input
            className="form-input"
            type="password"
            placeholder={t("enterpassword.label")}
            y
            name="psw"
            id="psw"
            onChange={(event) => {
              setPw(event.target.value);
            }}
            ref={register({ required: true })}
          />

          {errors.psw && (
            <div className="empty-alert">Please enter your password</div>
          )}
        </div>

        <div className="landing-page-btn-wrapper">
          <button type="submit" className="regist-btn">
            {t("register.label")}
          </button>
          <Link className="form-redirection-link" to="/">
            <button type="submit" className="back-btn">
              {t("back.label")}
            </button>
          </Link>
        </div>

        <div className="form-redirection">
          {t("haveanacc.label")}{" "}
          <Link className="form-redirection-link" to="/login">
            {t("login.label")}
          </Link>
        </div>
      </form>
    );
  }
}
