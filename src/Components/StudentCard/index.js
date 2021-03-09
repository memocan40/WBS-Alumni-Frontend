import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

import './style.css';

export default function Usercard({ name, batch, id }) {
  const { t, i18n } = useTranslation();
  
  return (
      <div className="user-card">
          <div className="user-card-img-wrapper">
            <img className="user-card-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Profilepic" />
          </div>
          <h1 id="user-card-name">{t('name.label')} {name}</h1>
          <p class="user-card-desc">{t('batch.label')} {batch}</p>
          <Link to={`/studentprofile/${id}`}> <button class="user-card-btn">{t('contact.label')}</button></Link>
      </div>
  );
}
