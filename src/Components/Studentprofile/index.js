import { useTranslation } from 'react-i18next';


import './style.css';

export default function Studentprofile(student) {
  const { t, i18n } = useTranslation();
  return (
    <div className="student-profile">
      <div className="student-profile-left">
        <h1 className="student-profile-name">Name: </h1>
        <div className="student-profile-img-wrapper">
        <img className="student-profile-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Profilepic" />
        </div>
      </div>
      <div className="student-profile-info-container">
        <div className="student-profile-info">
          <h5>Batch: </h5><span>data</span>
        </div>
        <div className="student-profile-info">
          <h5>Interests: </h5>
          <span>data</span>
        </div>
        <div className="student-profile-info">
          <h5>Work status: </h5><span>data</span>
        </div>
        <div className="student-profile-info">
          <h5>City: </h5><span>data</span>
        </div>
        <div className="student-profile-info">
          <h5>Final project: </h5><span>data</span>
        </div>
        <div className="student-profile-info">
          <h5>Github: </h5><span>data</span>
        </div>
      </div>
    </div>
  );
}
