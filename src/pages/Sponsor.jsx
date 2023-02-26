import React from "react";
import FancyButton from "../components/FancyButton";

const Sponsor = () => {
  return (
    <div
      id="sponsor"
      className="py-16 text-white z-20 relative bg-blue-900/30 backdrop-blur-lg w-full"
    >
      <div className="flex flex-col items-center">
        <p className="text-4xl font-extrabold">
          Become a{" "}
          <span className="underline-offset-8 underline decoration-cyan-300">
            sponsor
          </span>{" "}
          of <b className="grad-text"> AceHack 2.0</b>{" "}
        </p>
        <a href="https://drive.google.com/file/d/1exvKjjxlDWIuIE9T52nVFuAudWuvh3cV" target={"_blank"} className="mt-10 text-black">
          <FancyButton data="Sponsor Us"/>
        </a>
      </div>
    </div>
  );
};

export default Sponsor;
