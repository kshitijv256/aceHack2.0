import React from "react";
import FancyButton from "./FancyButton";
import AceHackSm from "/assets/images/AceHack-sm-logo.png"
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="bg-gray-900/30 w-full fixed top-0 z-30 backdrop-blur-md">
      <IconContext.Provider
        value={{ style: { fontSize: "2rem", position: "relative", color: "white" } }}
      >
        <FaBars className="md:hidden w-10 h-10 px-2 py-1" />
        <div className="">
          <div className="flex justify-between items-center">
            <img src={AceHackSm} alt="AceHack2.0" className="hidden md:block object-contain" />
            <div className="hidden space-x-6 md:flex items-center px-6">
              <FancyButton id={"home"} data={"Register!"} />
              <FancyButton id={"about"} data={"About"} />
              <FancyButton id={"past"} data={"Acehack 1.0"} />
              <FancyButton id={"themes"} data={"Themes"} />
              <FancyButton id={"team"} data={"Team"} />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar;