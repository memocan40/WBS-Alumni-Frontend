import Header from '../../Components/Layout/Header';
import BatchCard from '../../Components/Students/BatchCard';
import Footer from '../../Components/Layout/Footer';
import Loader from '../../Components/Reusable/Loader';

import './style.css';

export default function AllBatches({ obj }) {
  if (obj) {
    const renderedBatches = obj.map((batch, index) => {
      return <BatchCard batchName={batch.name} batchNum={index+1}/>;
    });

    return (
      <div className="AllBatches">
        <Header />
          <section className="batch-cards-container">{renderedBatches}</section>
        <Footer />
      </div>
    );
  } else {
    return <Loader />;
  }
}
