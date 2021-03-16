import { useTranslation } from 'react-i18next';
import {Link}from 'react-router-dom';

import './style.css';

export default function BatchCard({ batchName, batchNum }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="batch-card" key={batchName}>
      <h1 className="batch-heading">Batch {batchNum}</h1>
      <h3 className="batch-subheading">{batchName}</h3>
      <Link to={`/allbatches/${batchName}`} className="batch-card-btn">{t('visitbatch.label')}</Link>
    </div>
  );
}
