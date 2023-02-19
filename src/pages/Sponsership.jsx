import React from "react";
import Sponsers from "../components/Sponsers";

const Sponsership = () => {
  return (
    <div className="text-white z-20 relative bg-blue-900/50 backdrop-blur-lg w-full py-6">
      <div className="flex justify-center my-2">
        <h1 className="grad-text text-4xl font-bold">Our Sponsors</h1>
      </div>
      <div className="flex flex-col items-center mx-6">
        <div className="flex sm:flex-row flex-col justify-evenly items-center w-full">
          <Sponsers img="" text="AceHack 1.0" />
          <Sponsers img="" text="AceHack 1.0" />
        </div>
        <div className="flex sm:flex-row flex-col justify-evenly items-center w-full">
          <Sponsers img="" text="AceHack 1.0" />
          <Sponsers img="" text="AceHack 1.0" />
        </div>
      </div>
    </div>
  );
};

export default Sponsership;
