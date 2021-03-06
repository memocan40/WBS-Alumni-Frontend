import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import UserDropdown from '../Userdropdown';
import ToggleBtn from '../Togglebtn';
import LanguageSelector from "../Languageselector";

import "./style.css";

export default function Header() {
    const { t, i18n } = useTranslation()
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="landing-page-heading">WBS <span className="lighter-font">Alumni</span></h1>
            </div>
            <div className="header-right">
                <div className="header-right-top-wrapper">
                    <ToggleBtn />
                    <LanguageSelector />
                </div>
                <div className="header-right-bottom-wrapper">
                    <nav className="nav-wrapper">
                        <Link to="/allbatches/" className="nav-item">{t('allbatches.label')}</Link>
                        <Link to="/reachout/" className="nav-item">{t('reachout.label')}</Link>
                        <Link to="/letscode/" className="nav-item">{t('letscode.label')}</Link>
                    </nav>
                    <div className="log-in-wrapper">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" className="user-profile-img" />
                        <UserDropdown />    
                    </div>
                </div>
            </div>
        </header>
    )
}