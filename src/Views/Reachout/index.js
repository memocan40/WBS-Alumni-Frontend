import Header from '../../Components/Header';
import Searchbar from '../../Components/Searchbar';
import UserCard from '../../Components/StudentCard';
import Footer from '../../Components/Footer';

import './style.css';

export default function ReachOut({students}) {
  return (
    <>
      <Header />
      <Searchbar />
      <div className="search-grid">
        {students ? students.map((student) => {
          return <UserCard name={student.name} batch={student.batch}/>
        }) : "no data"}
      </div>
      <Footer />
    </>
  );
}
