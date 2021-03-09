import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import Loader from '../Loader';

import './style.css';

export default function Studentprofile({obj}) {

  const { t, i18n } = useTranslation();
  
  const { userId } = useParams();

  console.log(obj)
  if(obj) {
  const userObj = obj.filter((user)=> {
    return userId == user.id;
  })

  console.log(userObj)
  return (
    <div className="student-profile">
      <div className="student-profile-left">
        <h1 className="student-profile-name">{userObj[0].first_name} {userObj[0].last_name}</h1>
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
  );} else {
    return (
      <Loader />
    )
  }
}
