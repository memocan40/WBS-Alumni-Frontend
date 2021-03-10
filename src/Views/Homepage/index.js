import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Welcome from "../../Components/Welcome/welcome";

import "./style.css";

export default function HomePageView () {
    return (
        <>
            <Header />
            <Welcome/>
            <Footer />
        </>
    )
}
