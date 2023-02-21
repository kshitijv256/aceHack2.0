import React from "react";
import Item from "../components/Item";

import book from "/assets/images/themes/book.png";
import doctor from "/assets/images/themes/doctor.png";
import vr from "/assets/images/themes/vr.png";
import development from "/assets/images/themes/development.png";
import thinkGreen from "/assets/images/themes/think-green.png";
import scale from "/assets/images/themes/scale.png";
import energy from "/assets/images/themes/energy.png";
import blockchain from "/assets/images/themes/blockchain.png";

const Themes = () => {
  return (
    <div id="themes" className="pt-24 text-white z-20 relative bg-blue-900/30 backdrop-blur-lg w-full py-6">
      <div className="flex justify-center my-2">
        <h1 className="grad-text text-5xl font-bold">Themes</h1>
      </div>
      <div className="flex flex-col items-center mx-6">
        <div className="flex sm:flex-row flex-col justify-evenly items-center w-full">
          <Item img={book} text="Education" />
          <Item img={doctor} text="Healthcare" />
        </div>
        <div className="flex sm:flex-row flex-col justify-evenly items-center w-full">
          <Item img={vr} text="AR / VR" />
          <Item img={development} text="Open Innovation" />
        </div>
        <div className="flex sm:flex-row flex-col justify-evenly items-center w-full">
          <Item img={thinkGreen} text="Environment" />
          <Item img={scale} text="Diversity" />
        </div>
        <div className="flex sm:flex-row flex-col justify-evenly items-center w-full">
          <Item img={energy} text="Energy" />
          <Item img={blockchain} text="Blockchain" />
        </div>
      </div>
    </div>
  );
};

export default Themes;
