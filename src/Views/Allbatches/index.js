import Header from '../../Components/Header';
import BatchCard from '../../Components/Batchcard';
import Chat from "../../Components/Chat/Chat";

import "./style.css";

export default function AllBatches() {
  return (
    <div>
      <Header />
      <section class="batch-cards-container">
        <BatchCard batchName="batch1" batchDate=""/>
        <BatchCard batchName="batch2" batchDate=""/>
      </section>
      <Chat/>
    </div>
  );
}
