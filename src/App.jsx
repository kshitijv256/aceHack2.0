import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Past from "./pages/Past";
import Themes from "./pages/Themes";
import TeamSection from "./pages/TeamSection";
import Footer from "./pages/Footer";
import Speakers from "./pages/Speakers";
import Faq from "./pages/Faq";
import Sponsor from "./pages/Sponsor";
import Faculty from "./pages/Faculty";
import Prizes from "./pages/Prizes";
import Why from "./pages/why";
import Referal from "./pages/referal";
import Schedule from "./components/schedule";

const App = () => {
  return (
    <>
      <Home />
      <Navbar/>
      <About />
      <Schedule/>
      <Themes />
      <Why/>
      <Prizes />
      <Referal/>
      <Faq />
      <Sponsor />
      <Past />
      <Speakers />
      <TeamSection />
      <Faculty />
      <Footer />
    </>
  )
}

export default App;
