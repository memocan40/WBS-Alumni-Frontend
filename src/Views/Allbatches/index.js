import Header from '../../Components/Header';
import BatchCard from '../../Components/Batchcard';
import Footer from '../../Components/Footer';
import Loader from '../../Components/Loader';

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
