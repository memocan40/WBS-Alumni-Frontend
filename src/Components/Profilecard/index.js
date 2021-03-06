import './style.css';

export default function Profilecard() {
  return (
    <div className="profile">
      <div className="flex-container">
        <div className="picture">Picture</div>
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
