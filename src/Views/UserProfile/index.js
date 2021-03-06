import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useTranslation } from 'react-i18next';

import "./style.css";

export default function Profile({userObject}) {
    const { t, i18n } = useTranslation();
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
                <div className="profile-desc">{t('name.label')} <span>data</span></div>
                <div className="profile-desc">{t('email.label')} <span>data</span></div>
                <div className="profile-desc">{t('batch.label')} <span>data</span></div>
                <div className="profile-desc">{t('city.label')} <span>data</span></div>
                <div className="profile-desc">{t('strengths.label')} <span>data</span></div>
                <div className="profile-desc">{t('weaknesses.label')} <span>data</span></div>
                <div className="profile-desc">{t('workstatus.label')} <span>data</span></div>
                <button className="profile-edit-btn">{t('editprofile.label')}</button>
            </div>
        </div>
        <Footer />
        </>
    )
}