import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

//Component imports
import Header from "../../Components/Header";
import UserProfileInput from "../../Components/Userprofiledata/input";
import UserProfileDropdown from "../../Components/Userprofiledata/dropdown";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Profile({userObject}) {

    //const [userData, setUserData] = useState({userObject});

    
    const { t, i18n } = useTranslation();

    console.log(userObject);
    if(userObject) {
    return (
        <>
        <Header />
        <div className="profile-wrapper">
            <div className="profile-left-wrapper">
                <h1 className="profile-heading">{t('yourprofile.label')}</h1>
                <div className="profile-img-wrapper"><img className="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" placeholder="user-profile"></img></div>
                <button className="upload-pic-btn">{t('uploadpicture.label')}</button>
            </div>
            <div className="profile-right-wrapper">
                <div className="profile-desc">{t('firstname.label')} <span><UserProfileInput value={userObject.first_name}/></span></div>
                <div className="profile-desc">{t('lastname.label')} <span><UserProfileInput value={userObject.last_name}/></span></div>
                <div className="profile-desc">{t('email.label')} <span>data</span></div>
                <div className="profile-desc">{t('batch.label')} <span>data</span></div>
                <div className="profile-desc">{t('city.label')} <span>data</span></div>
                <div className="profile-desc">{t('interests.label')} <span>data</span></div>
                <div className="profile-desc">{t('github.label')} <span>data</span></div>
                <div className="profile-desc">{t('workstatus.label')} <span>data</span></div>
                <button className="profile-edit-btn">{t('editprofile.label')}</button>
            </div>
        </div>
        <Footer />
        </>  
    )} else {
        return (<> loader</>)
    }
}