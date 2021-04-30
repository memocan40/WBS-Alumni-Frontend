import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import Studentprofile from '../../Components/StudentProfile';

export default function StudentProfile({ obj }) {
  return (
    <>
      <Header />
      <Studentprofile obj={obj} />
      <Footer />
    </>
  );
}
