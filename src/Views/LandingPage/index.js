import "./style.css";
import Register from "../../Components/Register/Register";
import {useState}from "react";
export default function LandingPage(){
    let[toggle,settoggle]=useState(false);
    return(
        <div className="landing-page-wrapper">
        <Register show={toggle} setshow={settoggle}/>
            <div className="landing-page-content-wrapper">
            
                <h3 className="landing-page-subheading">welcome to</h3>
                <h1 className="landing-page-heading">WBS <span class="lighter-font">Alumni</span></h1>
                <div className="landing-page-btn-wrapper">
                    <button class="log-in-btn">Log in</button>
                    <button onClick={()=>{settoggle(true)}} class="register-btn">Register</button>
                    
                </div>
            </div>
        </div>
    )
}