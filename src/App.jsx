import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Past from "./pages/Past";
import Themes from "./pages/Themes";
import TeamSection from "./pages/TeamSection";
import Footer from "./pages/Footer";
import Speakers from "./pages/Speakers";
import Menu from "./components/Menu";
import Faq from "./pages/Faq";
import Sponsor from "./pages/Sponsor";
import Faculty from "./pages/Faculty";
import Partner from "./pages/Partner";

const App = () => {
  return (
    <>
      <Menu />
      <Navbar/>
      <Home />
      <About />
      <Past />
      <Speakers />
      <Themes />
      <Sponsor />
      <Partner />
      <TeamSection />
      <Faculty />
      <Faq />
      <Footer />
    </>
  )
}

export default App;
