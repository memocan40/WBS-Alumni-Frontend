import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import Loader from '../Loader';

import './style.css';

export default function Studentprofile({obj}) {

  const { t, i18n } = useTranslation();
  
  const { userId } = useParams();

  if(obj) {
  const userObj = obj.filter((user)=> {
    return userId == user.id;
  })

  console.log(userObj)
  return (
    <div className="student-profile">
      <div className="student-profile-left">
        <h1 className="student-profile-name">{userObj[0].username}</h1>
        <div className="student-profile-img-wrapper">
        <img className="student-profile-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Profilepic" />
        </div>
      </div>
      <div className="student-profile-info-container">
        <div className="student-profile-info">
          <h5>{t('firstname.label')} </h5><span>{userObj[0].first_name}</span>
        </div>
        <div className="student-profile-info">
          <h5>{t('lastname.label')} </h5><span>{userObj[0].last_name}</span>
        </div>
        <div className="student-profile-info">
          <h5>{t('batch.label')} </h5><span>{userObj[0].batch}</span>
        </div>
        <div className="student-profile-info">
          <h5>{t('interests.label')} </h5>
          <span>{userObj[0].interests}</span>
        </div>
        <div className="student-profile-info">
          <h5>{t('workstatus.label')} </h5><span>{userObj[0].work_status}</span>
        </div>
        <div className="student-profile-info">
          <h5>{t('city.label')} </h5><span>{userObj[0].city}</span>
        </div>
        <div className="student-profile-info">
          <h5>{t('finalproject.label')} </h5><span>{userObj[0].final_project}</span>
        </div>
        <div className="student-profile-info">
          <h5>{t('github.label')} </h5><span>{userObj[0].github}</span>
        </div>
        <div className="student-profile-info">
          <h5>{t('linkedin.label')} </h5><span>{userObj[0].linkedin}</span>
        </div>
      </div>
    </div>
  );} else {
    return (
      <Loader />
    )
  }
}
