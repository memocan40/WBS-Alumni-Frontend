import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import axios from 'axios';

import Api from '../../Api/Api';

//Component imports
import Loader from '../../Components/Loader';
import Header from '../../Components/Header';
import UserProfileInput from '../../Components/Userprofiledata/input';
import UserProfileDropdown from '../../Components/Userprofiledata/dropdown';
import Footer from '../../Components/Footer';

import './style.css';

export default function Profile({
  userObject,
  setUserObject,
  cities,
  interests,
  workStatus,
  batches,
}) {
  const baseUrl = `https://hidden-shelf-31461.herokuapp.com`;

  const placeholderPic =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';


  const [pic, setPic] = useState('');
  const [picUrl, setPicUrl] = useState(`${baseUrl}/images/${userObject.data.picture}`);


  const dataSubmit = () => {
    Api.updateUserbyID(userObject);
  };

  const uploadPic = async () => {
    try {
      const data = new FormData();
      data.append('profile_pic', pic);
      const res = await axios.post(
        `${baseUrl}/users/upload-profile-pic/${userObject.id}`,
        data
      );
      if (res) {
        setPicUrl(`${baseUrl}/images/${userObject.data.picture}`);
        console.log(res)
      }
    } catch (e) {
      console.error(e);
    }
  };

  console.log(cities);
  console.log(interests);
  console.log(workStatus);

  const { t, i18n } = useTranslation();

    console.log(userObject.data);
    if(userObject ) {
    return (
      <>
        <Header />
        <div className="profile-wrapper">
          <div className="profile-left-wrapper">
            <h1 className="profile-heading">{t('yourprofile.label')}</h1>
            <div className="profile-img-wrapper">
              <img
                className="profile-img"
                src={userObject.data.picture ? picUrl : placeholderPic}
                placeholder="user-profile"></img>
            </div>
            <form method="POST" encType="multipart/form-data">
              <input
                type="file"
                id="profile_pic"
                name="profile_pic"
                onChange={(e) => setPic(e.target.files[0])}
              />
              <button
                className="upload-pic-btn"
                onClick={(e) => {
                  e.preventDefault();
                  uploadPic();
                }}>
                {t('uploadpicture.label')}
              </button>
            </form>
          </div>
          <div className="profile-right-wrapper">
            <div className="profile-desc">
              {t('firstname.label')}{' '}
              <span className="profile-input-container">
                <UserProfileInput
                  value={userObject.data.first_name}
                  onSubmit={(valueFromChild) =>
                    setUserObject({ ...userObject, first_name: valueFromChild })
                  }
                />
              </span>
            </div>
            <div className="profile-desc">
              {t('lastname.label')}{' '}
              <span className="profile-input-container">
                <UserProfileInput
                  value={userObject.data.last_name}
                  onSubmit={(valueFromChild) =>
                    setUserObject({ ...userObject, last_name: valueFromChild })
                  }
                />
              </span>
            </div>
            <div className="profile-desc">
              {t('batch.label')}{' '}
              <span className="profile-input-container">
                <UserProfileDropdown
                  defValues={batches}
                  currentValue={userObject.data.batch}
                  onSubmit={(valueFromChild) =>
                    setUserObject({ ...userObject, batch: valueFromChild })
                  }
                />
              </span>
            </div>
            <div className="profile-desc">
              {t('city.label')}{' '}
              <span className="profile-input-container">
                <UserProfileDropdown
                  defValues={cities}
                  currentValue={userObject.data.city}
                  onSubmit={(valueFromChild) =>
                    setUserObject({ ...userObject, city: valueFromChild })
                  }
                />
              </span>
            </div>
            <div className="profile-desc">
              {t('interests.label')}{' '}
              <span className="profile-input-container">
                <UserProfileInput
                  value={userObject.data.interests}
                  onSubmit={(valueFromChild) =>
                    setUserObject({ ...userObject, interests: valueFromChild })
                  }
                />
              </span>
            </div>
            <div className="profile-desc">
              {t('workstatus.label')}{' '}
              <span className="profile-input-container">
                <UserProfileDropdown
                  defValues={workStatus}
                  currentValue={userObject.data.work_status}
                  onSubmit={(valueFromChild) =>
                    setUserObject({
                      ...userObject,
                      work_status: valueFromChild,
                    })
                  }
                />
              </span>
            </div>
            <div className="profile-desc">
              {t('github.label')}{' '}
              <span className="profile-input-container">
                <UserProfileInput
                  value={userObject.data.github}
                  onSubmit={(valueFromChild) =>
                    setUserObject({ ...userObject, github: valueFromChild })
                  }
                />
              </span>
            </div>
            <div className="profile-desc">
              {t('linkedin.label')}{' '}
              <span className="profile-input-container">
                <UserProfileInput
                  value={userObject.data.linkedin}
                  onSubmit={(valueFromChild) =>
                    setUserObject({ ...userObject, linkedin: valueFromChild })
                  }
                />
              </span>
            </div>
            <div className="profile-desc">
              {t('finalproject.label')}{' '}
              <span className="profile-input-container">
                <UserProfileInput
                  value={userObject.data.final_project}
                  onSubmit={(valueFromChild) =>
                    setUserObject({
                      ...userObject,
                      final_project: valueFromChild,
                    })
                  }
                />
              </span>
            </div>
            <button className="profile-edit-btn" onClick={dataSubmit}>
              {t('confirmchanges.label')}
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return <Loader />;
  }
}
