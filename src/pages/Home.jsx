import React from "react";
import AceHackLogo from "/assets/images/AceHack-logo.png";
import backgroundImage from "/assets/images/background-image.jpg";
import {ImLocation2} from "react-icons/im";

const Home = () => {
  return (
    <div id="home" className="sticky top-0 z-0 mt-20 pb-20 text-white scroll-smooth">
      <div className="overlay"></div>
        <img className="bgVideo" src={backgroundImage} alt="aceHack background image" />
      <div className="my-10 flex flex-col justify-center items-center">
        <img alt="AceHack Logo" className="py-10 max-w-[80%]" src={AceHackLogo}/>
        <a className="border-2 px-3 py-2 p-10 text-xl border-white transition-shadow hover:bg-gradient-to-br from-cyan-300 to-cyan-500 hover:text-black" href={"#"}>
          <h2>Register Now</h2>
        </a>
        <h2 className="break-words text-center mt-8 mb-10 text-2xl flex items-center">
          <ImLocation2 className="w-10 fill-blue-600" />
          <p> &nbsp; March, 17 and 18 @ University of Engineering and Management, Jaipur</p>
        </h2>
      </div>
    </div>
  );
};

export default Home;
