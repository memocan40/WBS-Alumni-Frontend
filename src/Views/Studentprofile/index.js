import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Studentprofile from '../../Components/Studentprofile';

export default function StudentProfile({ obj }) {
  return (
    <>
      <Header />
      <Studentprofile obj={obj} />
      <Footer />
    </>
  );
}
