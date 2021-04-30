import { useEffect, useState } from "react";
import axios from "axios";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Api from "../../Api/Api";
import Loader from "../Loader";
import "./style.css";
const { REACT_APP_BASE_URL } = process.env;

export default function Studentprofile({ obj }) {
  const [userObj, setUserObj] = useState("");
  const { t } = useTranslation();
  const { userId } = useParams();

  const placeholderURL =
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

  useEffect(async () => {
    const res = await Api.getUserbyID(userId);
    if (res) {
      console.log(res);
      setUserObj(res);
    }
  }, []);

  if (userObj) {
    return (
      <div className="student-profile">
        <div className="student-profile-left">
          <h1 className="student-profile-name">{userObj.username}</h1>
          <div className="student-profile-img-wrapper">
            <img
              className="student-profile-img"
              src={
                userObj.picture
                  ? `${REACT_APP_BASE_URL}/images/${userObj.picture}`
                  : placeholderURL
              }
              alt="Profilepic"
            />
          </div>
        </div>
        <div className="student-profile-info-container">
          <div className="student-profile-info">
            <h5>{t("firstname.label")} </h5>
            <span>{userObj.first_name}</span>
          </div>
          <div className="student-profile-info">
            <h5>{t("lastname.label")} </h5>
            <span>{userObj.last_name}</span>
          </div>
          <div className="student-profile-info">
            <h5>{t("batch.label")} </h5>
            <span>{userObj.batch}</span>
          </div>
          <div className="student-profile-info">
            <h5>{t("interests.label")} </h5>
            <span>{userObj.interests}</span>
          </div>
          <div className="student-profile-info">
            <h5>{t("workstatus.label")} </h5>
            <span>{userObj.work_status}</span>
          </div>
          <div className="student-profile-info">
            <h5>{t("city.label")} </h5>
            <span>{userObj.city}</span>
          </div>
          <div className="student-profile-info">
            <h5>{t("finalproject.label")} </h5>
            <span>{userObj.final_project}</span>
          </div>
          <div className="student-profile-info">
            <h5>{t("github.label")} </h5>
            <span>{userObj.github}</span>
          </div>
          <div className="student-profile-info">
            <h5>{t("linkedin.label")} </h5>
            <span>{userObj.linkedin}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loader-wrapper-sp">
        <Loader />
      </div>
    );
  }
}
