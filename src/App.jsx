import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Past from "./pages/Past";
import Themes from "./pages/Themes";
import Team from "./pages/Team";
import Footer from "./pages/Footer";
import Speakers from "./pages/Speakers";
import Menu from "./components/Menu";
import Faq from "./pages/Faq";
import Sponsor from "./pages/Sponsor";
import Faculty from "./pages/Faculty";

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
      <Team />
      <Faculty />
      <Faq />
      <Footer />
    </>
  )
}

export default App;
