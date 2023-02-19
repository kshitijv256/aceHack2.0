import React from "react";
import AceHackLogo from "/assets/images/AceHack-logo.png";
import backgroundImage from "/assets/images/background-image.jpg";

const Home = () => {
  return (
    <div className="sticky z-0 top-24">
      <div className="overlay"></div>
        <img className="bgVideo" src={backgroundImage} alt="aceHack background image" />
      <div className="my-4 flex flex-col justify-center items-center text-white">
        <img alt="AceHack Logo" className="w-auto pt-10" src={AceHackLogo} />
        <h1 className="text-2xl mt-2">Coming Soon...</h1>
        <a className="border-2 px-2 py-[1.5] m-2 border-white transition-shadow hover:bg-white hover:text-black" href={"#"}>
          <h2>Go to Events</h2>
        </a>

        <h2 className="break-words text-center">March, 17 and 18 @ University of Engineering and Management, Jaipur</h2>

        <h2 className="break-words text-center mb-4 mt-2">
          March, 17 and 18 @ University of Engineering and Management, Jaipur
        </h2>
      </div>
    </div>
  );
};

export default Home;
