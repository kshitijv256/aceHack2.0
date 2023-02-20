import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Past from "./pages/Past";
import Themes from "./pages/Themes";
import Team from "./pages/Team";
import Footer from "./pages/Footer";
import Speakers from "./pages/Speakers";

const App = () => {
  return (
    <>
      <Navbar/>
      <Home />
      <About />
      <Past />
      <Speakers />
      <Themes />
      <Team />
      <Footer />
    </>
  )
}

export default App;
