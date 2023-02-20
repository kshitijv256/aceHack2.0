import React from "react";
import Item from "../components/Item";

const Themes = () => {
  return (
    <div id="themes" className="pt-24 text-white z-20 relative bg-blue-900/30 backdrop-blur-lg w-full py-6">
      <div className="flex justify-center my-2">
        <h1 className="grad-text text-5xl font-bold">Themes</h1>
      </div>
      <div className="flex flex-col items-center mx-6">
        <div className="flex sm:flex-row flex-col justify-evenly items-center w-full">
          <Item img="/assets/images/themes/book.png" text="Education" />
          <Item img="/assets/images/themes/doctor.png" text="Healthcare" />
        </div>
        <div className="flex sm:flex-row flex-col justify-evenly items-center w-full">
          <Item img="/assets/images/themes/vr.png" text="AR / VR" />
          <Item img="/assets/images/themes/development.png" text="Open Innovation" />
        </div>
        <div className="flex sm:flex-row flex-col justify-evenly items-center w-full">
          <Item img="/assets/images/themes/think-green.png" text="Environment" />
          <Item img="/assets/images/themes/scale.png" text="Diversity" />
        </div>
        <div className="flex sm:flex-row flex-col justify-evenly items-center w-full">
          <Item img="/assets/images/themes/energy.png" text="Energy" />
          <Item img="/assets/images/themes/blockchain.png" text="Blockchain" />
        </div>
      </div>
    </div>
  );
};

export default Themes;
