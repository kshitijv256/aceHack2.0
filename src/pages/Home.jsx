import React from "react";
import AceHackLogo from "/assets/images/AceHack-logo.png";
import backgroundImage from "/assets/images/background-image.jpg";

const Home = () => {
  return (
    <div className="sticky z-0 mt-36 text-white">
      <div className="overlay"></div>
        <img className="bgVideo" src={backgroundImage} alt="aceHack background image" />
      <div className="my-10 flex flex-col justify-center items-center">
        <img alt="AceHack Logo" className="w-auto py-10" src={AceHackLogo} />
        <a className="border-2 px-3 py-2 p-10 text-xl border-white transition-shadow hover:bg-white hover:text-black" href={"#"}>
          <h2>Register Now</h2>
        </a>
        <h2 className="break-words text-center my-10 text-xl">
          March, 17 and 18 @ University of Engineering and Management, Jaipur
        </h2>
      </div>
    </div>
  );
};

export default Home;
