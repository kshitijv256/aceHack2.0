import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AddressMap from "./pages/map";
import Tweets from "./pages/Tweets";

const App = () => {
  return (
    <>
      <div className="wrapper bg-gray-900">
      <Navbar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Home />
                  <About />
                  <Schedule />
                  <Themes />
                  <Why />
                  <Prizes />
                  <Referal />
                  <Sponsor />
                  <Past />
                  <Speakers />
                  <Faculty />
                  <AddressMap />
                  <Faq />
                </div>
              }
            />
            <Route path="/team" element={<TeamSection />} />
            <Route path="/live" element={<Tweets/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default App;
