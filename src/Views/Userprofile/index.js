import React from 'react';
import { useTranslation } from 'react-i18next';

import Api from '../../Api/Api';

//Component imports
import Loader from "../../Components/Loader";
import Header from "../../Components/Header";
import UserProfileInput from "../../Components/Userprofiledata/input";
import UserProfileDropdown from "../../Components/Userprofiledata/dropdown";
import UserProfileMultiselect from "../../Components/Userprofiledata/multiselect";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Profile({userObject, setUserObject, cities, interests, workStatus}) {

    const dataSubmit = () => {
        Api.updateUserbyID(userObject);
    }

    console.log(cities)
    console.log(interests)
    console.log(workStatus)
    
    
    const { t, i18n } = useTranslation();

    console.log(userObject);
    if(userObject ) {
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
                <div className="profile-desc">{t('firstname.label')} <span className="profile-input-container"><UserProfileInput value={userObject.first_name} onSubmit={(valueFromChild)=> setUserObject({...userObject, first_name : valueFromChild}) } /></span></div>
                <div className="profile-desc">{t('lastname.label')} <span className="profile-input-container"><UserProfileInput value={userObject.last_name} onSubmit={(valueFromChild)=> setUserObject({...userObject, last_name : valueFromChild}) }/></span></div>
                <div className="profile-desc">{t('batch.label')} <span className="profile-input-container"><UserProfileDropdown onSubmit={(valueFromChild)=> setUserObject({...userObject, batch : valueFromChild}) }/></span></div>
                <div className="profile-desc">{t('city.label')} <span className="profile-input-container"><UserProfileInput onSubmit={(valueFromChild)=> setUserObject({...userObject, city_id : valueFromChild}) }/></span></div>
                <div className="profile-desc">{t('interests.label')} <span className="profile-input-container"><UserProfileMultiselect obj={interests} /></span></div>
                <div className="profile-desc">{t('workstatus.label')} <span className="profile-input-container"><UserProfileDropdown defValues={workStatus} onSubmit={(valueFromChild)=> setUserObject({...userObject, workstatus : valueFromChild}) }/></span></div>
                <div className="profile-desc">{t('github.label')} <span className="profile-input-container"><UserProfileInput value={userObject.github} onSubmit={(valueFromChild)=> setUserObject({...userObject, github : valueFromChild})} /></span></div>
                <div className="profile-desc">{t('linkedin.label')} <span className="profile-input-container"><UserProfileInput value={userObject.linkedin} onSubmit={(valueFromChild)=> setUserObject({...userObject, linked_in : valueFromChild})}/></span></div>
                <div className="profile-desc">{t('finalproject.label')} <span className="profile-input-container"><UserProfileInput value={userObject.final_project} onSubmit={(valueFromChild)=> setUserObject({...userObject, final_project : valueFromChild})}/></span></div>
                <button className="profile-edit-btn" onClick={dataSubmit}>{t('confirmchanges.label')}</button>
            </div>
        </div>
        <Footer />
        </>  
    )} else {
        return (<Loader />)
    }
}