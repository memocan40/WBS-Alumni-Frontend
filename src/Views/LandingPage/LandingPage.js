import "./style.css";

export default function LandingPage(){
    return(
        <div className="landing-page-wrapper">
            <div className="landing-page-content-wrapper">
                <h3>welcome to</h3>
                <h1>WBS Alumni</h1>
                <div className="landing-page-btn-wrapper">
                    <button class="log-in-btn">Log in</button>
                    <button class="register-btn">Register</button>
                </div>
            </div>
        </div>
    )
}