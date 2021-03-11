import Header from '../../Components/Header';
import BatchCard from '../../Components/Batchcard';
import Chat from "../../Components/Chat/Chat";
import Loader from '../../Components/Loader';

import "./style.css";

export default function AllBatches({obj}) {

  if(obj) {
  const renderedBatches = obj.map((batch) => {
      return <BatchCard batchName={batch.name}/>
  })

  return (
    <div>
      <Header />
      <section className="batch-cards-container">
        {renderedBatches}
      </section>
    </div>
  )} else {
    return <Loader />
  }

}
