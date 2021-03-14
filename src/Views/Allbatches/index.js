import Header from '../../Components/Header';
import BatchCard from '../../Components/Batchcard';
import Footer from '../../Components/Footer';
import Chat from "../../Components/Chat/Chat";
import Loader from '../../Components/Loader';

import "./style.css";

export default function AllBatches({obj}) {

  if(obj) {
  const renderedBatches = obj.map((batch) => {
      return <BatchCard batchName={batch.name}/>
  })

  return (
    <>
      <Header />
      <section className="batch-cards-container">
        {renderedBatches}
      </section>
      <Footer />
    </>
  )} else {
    return <Loader />
  }

}
