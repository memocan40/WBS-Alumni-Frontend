import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './style.css';

export default function Studentcard({ name, batch, id, picture }) {
  const { t, i18n } = useTranslation();
  const placeholderURL ="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
  const baseUrl ="https://hidden-shelf-31461.herokuapp.com";

  return (
    <div className="student-card" key={id}>
      <div className="student-card-img-wrapper">
        <img
          className="student-card-img"
          src={picture ? `${baseUrl}/images/${picture}` : placeholderURL}
          alt="Profilepic"
        />
      </div>
      <h1 className="student-card-name">
        {t('name.label')} {name}
      </h1>
      <p className="student-card-desc">
        {t('batch.label')} {batch}
      </p>
      <Link to={`/studentprofile/${id}`} className="student-card-btn">
        {t('contact.label')}
      </Link>
    </div>
  );
}
