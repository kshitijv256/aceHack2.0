import React from "react";
import Item from "../components/Item";

import book from "/assets/images/themes/book.png";
import doctor from "/assets/images/themes/doctor.png";
import vr from "/assets/images/themes/vr.png";
import development from "/assets/images/themes/development.png";
import thinkGreen from "/assets/images/themes/think-green.png";
import server from "/assets/images/themes/server.png";
import iot from "/assets/images/themes/iot.png";
import blockchain from "/assets/images/themes/blockchain.png";

const Themes = () => {
  return (
    <div id="themes" className="py-24 text-white z-20 relative bg-blue-900/30 backdrop-blur-lg w-full">
      <div className="flex justify-center my-2">
        <h1 className="grad-text text-5xl font-bold">Themes</h1>
      </div>
      <div className="flex flex-col items-center mx-6">
        <div className="flex flex-row flex-wrap justify-evenly items-center w-full">
          <Item img={blockchain} text="Blockchain" />
          <Item img={doctor} text="Healthcare" />
          <Item img={vr} text="AR / VR" />
          <Item img={development} text="Open Innovation" />
          <Item img={thinkGreen} text="Environment" />
          <Item img={server} text="Cyber Security" />
          <Item img={iot} text="Internet of Things" />
          <Item img={book} text="Education" />
        </div>
      </div>
    </div>
  );
};

export default Themes;
