import Header from '../../Components/Header';
import BatchCard from '../../Components/Batchcard';
import Chat from "../../Components/Chat/Chat";
import Usercard from "../../Components/Usercard/Usercard";

export default function AllBatches() {
  return (
    <div>
      <Header />
      <BatchCard batchName="batch1" batchDate=""/>
      <BatchCard batchName="batch2" batchDate=""/>
      <Chat/>
    </div>
  );
}
