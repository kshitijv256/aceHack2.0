import React from "react";
import AceHackLogo from "/assets/images/AceHack-logo.png";

const Home = () => {
  return (
    <div className="sticky z-0 top-24">
      <div className="overlay"></div>
      <video
        className="bgVideo"
        disablePictureInPicture
        playsInline
        autoPlay
        muted
        loop
      >
        <source src="/assets/videos/Circuit.mp4" type="video/mp4" />
      </video>
      <div className="my-4 flex flex-col justify-center items-center text-white md:mt-32 mt-10">
        <img
          alt="AceHack Logo"
          className="h-40 lg:h-56 w-auto"
          src={AceHackLogo}
        />
        {/* <h1 className="text-2xl mt-2">Coming Soon...</h1> */}
        
          <div className="border-2 border-dashed px-3 py-2 my-4 bg-transparent border-cyan-300 hover:grad-text hover:border-solid hover:cursor-pointer font-semibold">Register Now!</div>

        <h2 className="break-words text-center mb-4 mt-2">
          March, 17 and 18 @ University of Engineering and Management, Jaipur
        </h2>
      </div>
    </div>
  );
};

export default Home;
