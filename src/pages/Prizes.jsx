import React from "react";

const Prizes = () => {
  return (
    <div className="py-12 w-full bg-gray-900 relative z-20 text-white">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center mb-6">
          <h1 className="grad-text text-5xl font-bold">Prizes</h1>
        </div>
        <div className="border-double border-x-[16px] border-blue-400 bg-gray-900 w-4/5 text-center pt-8 flex flex-col flex-wrap justify-evenly">
          {/* <p className="text-4xl text-cyan-200 font-semibold p-6 animate-bounce-slow">Total worth above ₹3,50,000</p> */}
          <div className="rounded border-b-2 border-gray-700 m-4 flex flex-row flex-wrap justify-between">
            <h2 className="text-3xl font-bold px-4 py-10">1st Prize</h2>
            <p className="text-4xl text-cyan-200 font-semibold p-10">
              ₹ 40,000
            </p>
          </div>
          <div className="rounded border-b-2 border-gray-700 m-4 flex flex-row flex-wrap justify-between">
            <h2 className="text-3xl font-bold px-4 py-10">2nd Prize</h2>
            <p className="text-4xl text-cyan-200 font-semibold p-10">
              ₹ 30,000
            </p>
          </div>
          <div className="rounded border-b-2 border-gray-700 m-4 flex flex-row flex-wrap justify-between">
            <h2 className="text-3xl font-bold px-4 py-10">3rd Prize</h2>
            <p className="text-4xl text-cyan-200 font-semibold p-10">
              ₹ 20,000
            </p>
          </div>
          <div className="rounded border-b-2 border-gray-700 m-4 flex flex-row flex-wrap justify-between">
            <h2 className="text-3xl font-bold px-4 py-10 flex flex-wrap">
              Special prize for top Female participant
            </h2>
            <p className="text-4xl text-cyan-200 font-semibold p-10">
              ₹ 10,000
            </p>
          </div>
          <div className="rounded border-b-2 border-gray-700 m-4 flex flex-row flex-wrap justify-between">
            <h2 className="text-3xl font-bold px-4 py-10">4th-10th Prize: </h2>
            <p className="text-4xl text-cyan-200 font-semibold p-10">
              AceHack Swag Box
            </p>
          </div>
          <p className="text-gray-400">Sponsor tracks are also available </p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
