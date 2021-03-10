import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

import './style.css';

export default function Studentcard({ name, batch, id }) {
  const { t, i18n } = useTranslation();
  
  return (
      <div className="student-card">
          <div className="student-card-img-wrapper">
            <img className="student-card-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Profilepic" />
          </div>
          <h1 className="student-card-name">{t('name.label')} {name}</h1>
          <p className="student-card-desc">{t('batch.label')} {batch}</p>
          <Link to={`/studentprofile/${id}`} className="student-card-btn">{t('contact.label')}</Link>
      </div>
  );
}
