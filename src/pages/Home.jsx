import React from "react";
import AceHackLogo from "/assets/images/AceHack-logo.png"

const Home = () => {
  return (
    <>
      <div className="overlay"></div>
      <video className="bgVideo" disablePictureInPicture playsInline autoPlay muted loop>
        <source src="/assets/videos/Circuit.mp4" type="video/mp4" />
      </video>
      <div className="my-4 flex flex-col justify-center items-center text-white">
        <img alt="AceHack Logo" className="h-40 lg:h-56 w-auto" src={AceHackLogo} />
        <h1 className="text-2xl mt-2">Coming Soon...</h1>
        <a className="border-2 px-2 py-[1.5] m-2 border-white transition-shadow hover:bg-white hover:text-black" href={"#"}>
          <h2>Go to Events</h2>
        </a>

        <h2 className="break-words text-center">March, 17 and 18 @ University of Engineering and Management, Jaipur</h2>

      </div>
    </>
  )
}

export default Home;

