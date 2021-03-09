import Header from '../../Components/Header';
import Loader from "../../Components/Loader";
import Searchbar from '../../Components/Searchbar';
import StudentCard from '../../Components/StudentCard';
import Footer from '../../Components/Footer';

import './style.css';

export default function ReachOut({students}) {
  if(students) {
  return (
    <>
      <Header />
      <Searchbar />
      <div className="search-grid">
        {students ? students.map((student) => {
          return <StudentCard name={`${student.first_name} ${student.last_name}`} batch={student.batch} id={student.id}/>
        }) : "no data"}
      </div>
      <Footer />
    </>
  );} else {
    return (
      <Loader />
    )
  }
}
