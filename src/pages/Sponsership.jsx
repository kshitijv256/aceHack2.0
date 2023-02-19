import React from "react";
import Sponsers from "../components/Sponsers";

const Sponsership = () => {
    return (
        <div className="text-white z-20 relative bg-blue-900/50 backdrop-blur-lg w-screen py-6">
            <div className="flex justify-center my-2"><h1 className="grad-text text-4xl font-bold">Our sponsers</h1></div>
            <div className="flex flex-col items-center mx-6 md:grid grid-cols-6 grid-rows-2">
          <div className="col-start-2 row-start-1">
            <Sponsers img="" text="AceHack 1.0" />
          </div>
          <div className="col-start-2 row-start-2">
            <Sponsers img="" text="AceHack 1.0" />
          </div>
          <div className="col-start-5">
            <Sponsers img="" text="AceHack 1.0" />
          </div>
          <div className="col-start-5">
            <Sponsers img="" text="AceHack 1.0" />
          </div>
        </div>
        </div>
    );
};

export default Sponsership;