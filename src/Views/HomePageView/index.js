import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import Welcome from '../../Components/Reusable/WelcomeSlide';
import Chat from "../../Components/Reusable/Chat/Chat";

import './style.css';

export default function HomePageView({userName}) {
  return (
    <div className="Homepage">
      <Header />
      <Welcome />
      <Chat username={userName}/>
      <Footer />
    </div>
  );
}
