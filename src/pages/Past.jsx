import React from "react";
import Features from "../components/Features";

const Past = () => {
  return (
    <div className="text-white z-50 relative bg-indigo-900 w-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold p-4 my-4">
          <span className="grad-text">AceHack 1.0</span>  Highlights!
        </h1>
        <div className="flex flex-row justify-evenly w-full p-10">
          <Features icon="1..." text="topic"/>
          <Features icon="2..." text="topic"/>
          <Features icon="3..." text="topic"/>
          <Features icon="4..." text="topic"/>
        </div>
        <div className="grid grid-cols-6 grid-rows-2">
          <div className="col-start-1 row-start-1">
            <h1 className="text-4xl font-bold p-4 my-4">
              pic 1
            </h1>
          </div>
          <div className="col-start-1 row-start-2">
            <h1 className="text-4xl font-bold p-4 my-4">
              pic 1
            </h1>
          </div>
          <div className="col-start-6">
            <h1 className="text-4xl font-bold p-4 my-4">
              pic 1
            </h1>
          </div>
          <div className="col-start-6">
            <h1 className="text-4xl font-bold p-4 my-4">
              pic 1
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Past;