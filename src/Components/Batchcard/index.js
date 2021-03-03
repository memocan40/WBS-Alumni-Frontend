import './style.css';

export default function BatchCard({ batchName, batchDate }) {
  return (
    <div className="batch-card">
      <h1 className="batch-heading">{batchName}</h1>
      <p class="batch-date">Start date: {batchDate}</p>
      <button className="batch-card-btn">Visit Batch</button>
    </div>
  );
}