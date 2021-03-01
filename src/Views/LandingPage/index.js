import "./style.css";
import Register from "../../Components/Register/Register";
import Login from "../../Components/Login/Login";
import {useState}from "react";
export default function LandingPage(){
    let[toggle,settoggle]=useState(false);
    let[log,setlog]      =useState(false)
    return(
        <div className="landing-page-wrapper">
        <Register show={toggle} setshow={settoggle}/>
        <Login login={log}  setlogin={setlog}/>
            <div className="landing-page-content-wrapper">
            
                <h3 className="landing-page-subheading">welcome to</h3>
                <h1 className="landing-page-heading">WBS <span class="lighter-font">Alumni</span></h1>
                <div className="landing-page-btn-wrapper">
                    <button onClick={()=>{setlog(true)}} class="log-in-btn">Log in</button>
                    <button onClick={()=>{settoggle(true)}} class="register-btn">Register</button>
                    
                </div>
            </div>
        </div>
    )
}