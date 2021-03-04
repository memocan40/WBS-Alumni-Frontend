import Header from '../../Components/Header';
import BatchCard from '../../Components/BatchCard';
import Chat from "../../Components/Chat/Chat";
import Usercard from "../../Components/UserCard";

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
