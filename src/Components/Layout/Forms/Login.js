import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

import Loader from "../Reusable/Loader";

import "./style.css";
const { REACT_APP_BASE_URL } = process.env;

export default function Login({ setLoggedUser, loggedUser, setToken }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [showAlertUn, setShowAlertUn] = useState(false);
  const [loading, setloading] = useState(false);

  const history = useHistory();

  const { t } = useTranslation();
  let data = { email: email, password: pw };

  //Initializing useForm
  const { register, handleSubmit, errors } = useForm();

  let login = async (e) => {
    setloading(true);
    try {
      const response = await axios.post(
        [`${REACT_APP_BASE_URL}users/login`],
        data
      );

      console.log(response.data);
      if (response.data.code === 401) {
        setloading(false);
        setShowAlertUn(true);
        console.log(loggedUser);
        console.log(response);
      } else if (response.data.verified_user === false) {
        console.log("User is not verified");
      } else {
        setLoggedUser(response.data.data);
        setloading(false);
        response.data.data.first_login
          ? history.push("/profile")
          : history.push("/home");

        setToken(response.data.accessToken);
        localStorage.setItem("token", response.data.accessToken);
        console.log(process.env);
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
        <form className="form-content-container" onSubmit={handleSubmit(login)}>
          <h1 className="form-heading">{t("login.label")}</h1>
          <div class={showAlertUn ? "username-alert" : "not-alert"}>
            Credentials are incorrect
          </div>

          <div className="form-input-container">
            {/*Email Input*/}
            <label for="email" id="email" className="form-input-label">
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
              <div className="empty-alert">{t("requiredfield.label")}</div>
            )}
          </div>
          {/*Email Input*/}
          <div className="form-input-container">
            <label for="psw" className="form-input-label">
              {t("password.label")}
            </label>
            <input
              className="form-input"
              type="password"
              placeholder={t("enterpassword.label")}
              name="psw"
              id="psw"
              onChange={(event) => {
                setPw(event.target.value);
              }}
              ref={register({ required: true })}
            />
            {errors.psw && (
              <div className="empty-alert">{t("requiredfield.label")}</div>
            )}
          </div>
          <div className="landing-page-btn-wrapper">
            <button type="submit" className="regist-btn">
              {t("login.label")}
            </button>
            <Link className="form-redirection-link" to="/">
              <button type="submit" className="back-btn">
                {t("back.label")}
              </button>
            </Link>
          </div>
          <div className="form-redirection">
            {t("donthaveanacc.label")}
            <Link className="form-redirection-link" to="/register">
              {t("register.label")}
            </Link>
          </div>
        </form>
      </>
    );
  }
}
