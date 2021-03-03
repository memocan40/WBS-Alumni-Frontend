import Header from '../../Components/Header';
import BatchCard from '../../Components/Batchcard';

export default function AllBatches() {
  return (
    <div>
      <Header />
      <BatchCard value="david" />
      <BatchCard value="elie" />
    </div>
  );
}
