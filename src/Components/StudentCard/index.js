import './style.css';
import {Link} from "react-router-dom";
import {useparams} from "react";

export default function Usercard({ Name, Batch }) {
  //const {id}=useparams();
  return (
      <div class="user-card">
          <div className="user-card-img-wrapper">
            <img className="user-card-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Profilepic" />
          </div>
          <h1 id="user-card-name">Name:</h1>
          <p class="user-card-desc">Batch: 20 NOV 2020</p>
         <Link to={`/studentprofile`}> <button class="user-card-btn">Contact</button></Link>
      </div>
  );
}
