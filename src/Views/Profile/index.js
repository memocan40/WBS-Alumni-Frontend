import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./style.css";

export default function Profile({userObject}) {
    return (
        <>
        <Header />
        <div className="profile-wrapper">
            <div class="profile-left-wrapper">
                <h1 className="profile-heading">Your Profile</h1>
                <div className="profile-img-wrapper"><img className="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" placeholder="user-profile"></img></div>
                <button className="upload-pic-btn">Upload picture</button>
            </div>
            <div className="profile-right-wrapper">
                <div className="profile-desc">Name: <span>data</span></div>
                <div className="profile-desc">Email: <span>data</span></div>
                <div className="profile-desc">Batch: <span>data</span></div>
                <div className="profile-desc">City: <span>data</span></div>
                <div className="profile-desc">Strengths: <span>data</span></div>
                <div className="profile-desc">Weaknesses: <span>data</span></div>
                <button className="profile-edit-btn">Edit Profile</button>
            </div>
        </div>
        <Footer />
        </>
    )
}