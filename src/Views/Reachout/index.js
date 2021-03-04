import UserCard from '../../Components/StudentCard';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import './style.css';

export default function ReachOut() {
  return (
    <>
      <Header />
      <div className="search-grid">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <Footer />
    </>
  );
}
