import { Link } from "react-router-dom";

import UserDropdown from '../Userdropdown';
import ToggleBtn from '../Togglebtn';
import LanguageSelector from "../Languageselector";

import "./style.css";

export default function Header() {
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
                        <Link to="/allbatches/" className="nav-item">All Batches</Link>
                        <Link to="/reachout/" className="nav-item">Reach Out</Link>
                        <Link to="/letscode/" className="nav-item">Let's Code</Link>
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