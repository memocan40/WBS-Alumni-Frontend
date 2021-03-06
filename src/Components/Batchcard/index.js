import { useTranslation } from 'react-i18next';
import {Link}from "react-router-dom";

import './style.css';

export default function BatchCard({ batchName, batchDate }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="batch-card">
      <h1 className="batch-heading">{batchName}</h1>
      <p className="batch-date">{t('startdate.label')} {batchDate}</p>
      <button className="batch-card-btn">{t('visitbatch.label')}</button>
    </div>
  );
}
