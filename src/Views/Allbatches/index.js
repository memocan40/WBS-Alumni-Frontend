import Header from '../../Components/Header';
import BatchCard from '../../Components/Batchcard';

export default function AllBatches() {
  return (
    <div>
      <Header />
      <BatchCard batchName="batch1" batchDate=""/>
      <BatchCard batchName="batch2" batchDate=""/>
    </div>
  );
}
