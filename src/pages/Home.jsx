import React from "react";
import AceHackLogo from "/assets/images/AceHack-logo.png";
import backgroundImage from "/assets/images/background-image.jpg";
import {ImLocation2} from "react-icons/im";
import FancyButton from "../components/FancyButton";
import CountdownTimer from "../components/Timer";

const Home = () => {
  return (
    <div id="home" className="sticky top-0 z-0 mt-20 pb-20 text-white scroll-smooth">
      <div className="overlay"></div>
        <img className="bgVideo" src={backgroundImage} alt="aceHack background image" />
      <div className="flex flex-col justify-start items-center">
        <img alt="AceHack Logo" className="max-w-[80%]" src={AceHackLogo}/>
        <CountdownTimer targetDate={new Date('2023-04-01T00:00:00')} />
        <a className="text-black text-xl border-white  hover:text-white z-40" href="https://lu.ma/acehack2.0" target={"_blank"}>
          <FancyButton data="Register Now" id="register" />
        </a>
        <h2 className="break-words text-center mt-8 mb-10 text-2xl flex items-center">
          <ImLocation2 className="w-10 fill-blue-600" />
          <p> &nbsp; April 1<sup>st</sup> and 2<sup>nd</sup> @ University of Engineering and Management, Jaipur</p>
        </h2>
      </div>
    </div>
  );
};

export default Home;
