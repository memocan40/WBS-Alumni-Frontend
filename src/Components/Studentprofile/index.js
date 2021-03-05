import './style.css';

export default function Studentprofile() {
  return (
    <div className="profile">
      <div className="flex-container">
        <div className="picture">
        <img className="user-card-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Profilepic" />
        </div>
      </div>
      <div className="grid-container">
        <div className="infos">
          <h5>Forename: </h5>
        </div>
        <div className="infos">
          <h5>Last Name: </h5>
        </div>
        <div className="infos">
          <h5>Strength: </h5>
        </div>
        <div className="infos">
          <h5>Weakness: </h5>
        </div>
        <div className="infos">
          <h5>Interrests: </h5>
        </div>
        <div className="infos">
          <h5>Hobbys: </h5>
        </div>
        <div className="infos">
          <h5>Skills: </h5>
        </div>
        <div className="infos">
          <h5>Work Status: </h5>
        </div>
        <div className="infos">
          <h4>Badge: </h4>
        </div>
      </div>
    </div>
  );
}
