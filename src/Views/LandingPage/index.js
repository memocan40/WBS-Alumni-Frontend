import "./style.css";

export default function LandingPage(){
    return(
        <div className="landing-page-wrapper">
            <div className="landing-page-content-wrapper">
                <h3 className="landing-page-subheading">welcome to</h3>
                <h1 className="landing-page-heading">WBS <span class="lighter-font">Alumni</span></h1>
                <div className="landing-page-btn-wrapper">
                    <button class="log-in-btn">Log in</button>
                    <button class="register-btn">Register</button>
                </div>
            </div>
        </div>
    )
}