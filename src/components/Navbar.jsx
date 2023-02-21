import React from "react";
import FancyButton from "./FancyButton";
import AceHackSm from "/assets/images/AceHack-sm-logo.png"
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <IconContext.Provider
      value={{style: { fontSize: "2rem", position: "relative", color:"white" }}}
    >
    <div className="w-full h-20 px-5 py-2 md:flex justify-between items-center fixed top-0 backdrop-blur-md z-30 bg-gray-900/30">
      <div className="flex items-center">
        <img src={AceHackSm} alt="AceHack2.0" className="object-contain" />
      </div>
      <FaBars className="md:hidden" />
      <div className="w-full h-full gap-6 flex justify-end items-center">
        <FancyButton id={"home"} data={"Register!"} />
        <FancyButton id={"about"} data={"About"} />
        <FancyButton id={"past"} data={"Acehack 1.0"} />
        <FancyButton id={"themes"} data={"Themes"} />
        <FancyButton id={"team"} data={"Team"} />
      </div>

    </div>
    </IconContext.Provider>
  )
}

export default Navbar;