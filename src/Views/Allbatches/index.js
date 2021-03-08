import Header from '../../Components/Header';
import BatchCard from '../../Components/Batchcard';
import Chat from "../../Components/Chat/Chat";

import "./style.css";

export default function AllBatches() {
  return (
    <div>
      <Header />
      <section className="batch-cards-container">
        <BatchCard batchName="batch1" batchDate=""/>
        <BatchCard batchName="batch2" batchDate=""/>
        <BatchCard batchName="batch3" batchDate=""/>
        <BatchCard batchName="batch4" batchDate=""/>
        <BatchCard batchName="batch5" batchDate=""/>
        <BatchCard batchName="batch6" batchDate=""/>
        <BatchCard batchName="batch7" batchDate=""/>
        <BatchCard batchName="batch8" batchDate=""/>
      </section>
      
    </div>
  );
}
