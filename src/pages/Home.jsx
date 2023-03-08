import React from "react";
import AceHackLogo from "/assets/images/AceHack-logo.png";
import backgroundImage from "/assets/images/background-image.jpg";
import { ImLocation2, ImTelegram } from "react-icons/im";
import FancyButton from "../components/FancyButton";
import CountdownTimer from "../components/Timer";
import { FaTelegram } from "react-icons/fa";

const Home = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      id="home"
      className="sticky top-0 z-0 mt-20 pb-20 text-white scroll-smooth"
    >
      <div className="overlay"></div>
      <img
        className="bgVideo"
        src={backgroundImage}
        alt="aceHack background image"
      />
      <div className="flex flex-col justify-start items-center">
        <img alt="AceHack Logo" className="max-w-[80%]" src={AceHackLogo} />
        <CountdownTimer targetDate={new Date("2023-04-01T00:00:00")} />
        <div className="flex flex-row flex-wrap w-full justify-center gap-4">
        <div
          className="apply-button"
          data-hackathon-slug="acehack"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
        <div
          className="bg-cyan-500 rounded-md hover:bg-cyan-400"
          style={{ height: "44px", width: "312px" }}
        >
          <a href="https://t.me/acehack2" className="flex h-full w-full justify-center items-center text-xl font-semibold">
            <p>Join Our Community &nbsp; </p>
            <FaTelegram/>
          </a>
        </div>
        </div>
        <h2 className="break-words text-center mt-8 mb-10 text-2xl flex items-center">
          <ImLocation2 className="w-10 fill-blue-600" />
          <p>
            {" "}
            &nbsp; April 1<sup>st</sup> and 2<sup>nd</sup> @ University of
            Engineering and Management, Jaipur
          </p>
        </h2>
      </div>
    </div>
  );
};

export default Home;
