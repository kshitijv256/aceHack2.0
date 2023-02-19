import React from "react";
import FancyButton from "./FancyButton";
import AceHackSm from "../../public/assets/images/AceHack-sm-logo.png"

export const Navbar = () => {
  return (
    <div className="w-full px-5 py-2 md:flex justify-between items-center fixed top-0 hidden backdrop-blur-md z-10">
      <div>
        <img src={AceHackSm} alt="AceHack2.0" />
      </div>
      <div className="w-full flex justify-end">
        <FancyButton link={"./computer"} data={"Register!"}/>
        <FancyButton link={"./computer"} data={"Schedule"}/>
        <FancyButton link={"./computer"} data={"Rules"}/>
        <FancyButton link={"./computer"} data={"About"}/>
      </div>
    </div>
  )
}

export default Navbar;