import "./style.css";

export default function Searchbar() {
    return (
        <div className="search-bar-wrapper">
            <input className="search-bar-input" type="text"/>
            <button className="search-bar-btn" type="submit">Search</button>
        </div>
    )
}