import './style.css';
import {Link} from "react-router-dom";
import {useparams} from "react";

export default function Usercard({ name, batch }) {
  return (
      <div className="user-card">
          <div className="user-card-img-wrapper">
            <img className="user-card-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Profilepic" />
          </div>
          <h1 id="user-card-name">Name: {name}</h1>
          <p class="user-card-desc">Batch: {batch}</p>
          <Link to={`/studentprofile`}> <button class="user-card-btn">Contact</button></Link>
      </div>
  );
}
