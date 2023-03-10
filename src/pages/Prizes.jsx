import React from "react";

const Prizes = () => {
  return (
    <div className="py-12 w-full bg-gray-900 relative z-20 text-white">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center mb-6">
            <h1 className="grad-text text-5xl font-bold">Prizes</h1>
        </div>
        <div className="border-double border-x-[16px] border-blue-400 bg-gray-900 w-4/5 text-center pt-8">
                <p className="text-4xl text-cyan-200 font-semibold p-6 animate-bounce-slow">Total worth above ₹3,50,000</p>
            </div>
      </div>
    </div>
  );
};

export default Prizes;
