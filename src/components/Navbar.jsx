import React from "react";
import FancyButton from "./FancyButton";
import AceHackSm from "/assets/images/AceHack-sm-logo.png"

export const Navbar = () => {
  return (
    <div className="w-full h-20 px-5 py-2 md:flex justify-between items-center fixed top-0 hidden backdrop-blur-md z-30 bg-gray-900/30">
      <div>
        <img src={AceHackSm} alt="AceHack2.0" className="object-contain" />
      </div>
      <div className="w-full h-full gap-6 flex justify-end items-center">
        <FancyButton id={"home"} data={"Register!"}/>
        <FancyButton id={"about"} data={"About"}/>
        <FancyButton id={"past"} data={"Acehack 1.0"}/>
        <FancyButton id={"sponsor"} data={"Sponsors"}/>
        <FancyButton id={"team"} data={"Team"}/>
      </div>
    </div>
  )
}

export default Navbar;