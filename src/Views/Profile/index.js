import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Profilecard from "../../Components/Profilecard/Profilecard"

import "./style.css";

export default function Profile() {
    return (
        <>
        <Header />
        <div className="profile-wrapper">
            
            <Profilecard />
            
        </div>
        <Footer />
        </>
    )
}