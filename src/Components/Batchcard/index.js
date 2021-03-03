import './style.css';

export default function BatchCard({ value }) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <div class="card">
        <h1>{value}</h1>
        <p class="title">All Students of Batch</p>
        <p>WBS CodingSchool</p>

        <p>
          <button>Visit Batch</button>
        </p>
      </div>
    </div>
  );
}
