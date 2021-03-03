import "./style.css";

export default function ToggleBtn() {
    return (
        <div className="toggle-btn-wrapper">
            <span className="toggle-btn-desc">Theme: </span>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}