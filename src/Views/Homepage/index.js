import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Welcome from '../../Components/Welcomeslide/welcome';
import Chat from "../../Components/Chat/Chat";

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
