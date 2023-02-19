import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Past from "./pages/Past";
import Sponsership from "./pages/Sponsership";
import Team from "./pages/Team";

const App = () => {
  return (
    <>
      <Navbar/>
      <Home />
      <About />
      <Past />
      <Sponsership />
      <Team />
    </>
  )
}

export default App;
