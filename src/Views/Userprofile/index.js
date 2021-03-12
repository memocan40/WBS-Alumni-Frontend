import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import Api from '../../Api/Api';

//Component imports
import Loader from "../../Components/Loader";
import Header from "../../Components/Header";
import UserProfileInput from "../../Components/Userprofiledata/input";
import UserProfileDropdown from "../../Components/Userprofiledata/dropdown";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Profile({userObject, setUserObject, cities, interests, workStatus, batches}) {
    const [pic, setPic] = useState("");

    const dataSubmit = () => {
        Api.updateUserbyID(userObject);
    }

    const uploadPic = async() => {
        try{
            const res = await axios.post(`https://hidden-shelf-31461.herokuapp.com/users/upload-profile-pic/${userObject.id}`, pic)
            if(res) {
                console.log(res)
            }
        }catch(e){
            console.error(e);
        }
    }

    console.log(cities)
    console.log(interests)
    console.log(workStatus)
    
    console.log(pic);

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
                <form method="POST" encType="multipart/form-data">
                    <input type="file" id="profile_pic_select" onChange={(e)=>setPic(e.target.files[0])}/>
                    <button className="upload-pic-btn" onClick={uploadPic}>{t('uploadpicture.label')}</button>
                </form>
            </div>
            <div className="profile-right-wrapper">
                <div className="profile-desc">{t('firstname.label')} <span className="profile-input-container"><UserProfileInput value={userObject.first_name} onSubmit={(valueFromChild)=> setUserObject({...userObject, first_name : valueFromChild}) } /></span></div>
                <div className="profile-desc">{t('lastname.label')} <span className="profile-input-container"><UserProfileInput value={userObject.last_name} onSubmit={(valueFromChild)=> setUserObject({...userObject, last_name : valueFromChild}) }/></span></div>
                <div className="profile-desc">{t('batch.label')} <span className="profile-input-container"><UserProfileDropdown defValues={batches} onSubmit={(valueFromChild)=> setUserObject({...userObject, batch : valueFromChild}) }/></span></div>
                <div className="profile-desc">{t('city.label')} <span className="profile-input-container"><UserProfileDropdown defValues={cities} onSubmit={(valueFromChild)=> setUserObject({...userObject, city : valueFromChild})} /></span></div>
                <div className="profile-desc">{t('interests.label')} <span className="profile-input-container"><UserProfileInput value={userObject.interests} onSubmit={(valueFromChild)=> setUserObject({...userObject, interests : valueFromChild}) }/></span></div>
                <div className="profile-desc">{t('workstatus.label')} <span className="profile-input-container"><UserProfileDropdown defValues={workStatus} onSubmit={(valueFromChild)=> setUserObject({...userObject, work_status : valueFromChild}) } /></span></div>
                <div className="profile-desc">{t('github.label')} <span className="profile-input-container"><UserProfileInput value={userObject.github} onSubmit={(valueFromChild)=> setUserObject({...userObject, github : valueFromChild})} /></span></div>
                <div className="profile-desc">{t('linkedin.label')} <span className="profile-input-container"><UserProfileInput value={userObject.linkedin} onSubmit={(valueFromChild)=> setUserObject({...userObject, linkedin : valueFromChild})}/></span></div>
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