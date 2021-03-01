import "./style.css";

export default function Header() {
    return (
        <section className="header">
            <div className="header-left">
                <h1 className="landing-page-heading">WBS <span class="lighter-font">Alumni</span></h1>
            </div>
            <div className="header-right">
                <div className="header-right-top-wrapper">
                    {/*Toggle, lang dropdown */}
                </div>
                <div className="header-right-bottom-wrapper">
                    <nav className="nav-wrapper">
                        <div className="nav-item">All Batches</div>
                        <div className="nav-item">Reach Out</div>
                        <div className="nav-item">Let's Code</div>
                    </nav>
                    <div class="log-in-wrapper">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" class="user-profile-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}