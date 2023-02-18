import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Past from "./pages/Past";

const App = () => {
  return (
    <>
      <Navbar/>
      <Home />
      <About />
      <Past />
    </>
  )
}

export default App;
