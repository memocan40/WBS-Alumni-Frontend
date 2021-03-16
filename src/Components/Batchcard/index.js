import { useTranslation } from 'react-i18next';
import {Link}from 'react-router-dom';

import './style.css';

export default function BatchCard({ batchName }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="batch-card">
      <h1 className="batch-heading" key={batchName}>{batchName}</h1>
      <Link to={`/allbatches/${batchName}`} className="batch-card-btn">{t('visitbatch.label')}</Link>
    </div>
  );
}
