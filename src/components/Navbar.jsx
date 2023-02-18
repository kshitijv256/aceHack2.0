import React from "react";
import FancyButton from "./FancyButton";

export const Navbar = () => {
  return (
    <div className="w-full h-16 px-5 md:flex justify-between items-center fixed top-0 hidden backdrop-blur-md">
      <div>
        <img src="https://via.placeholder.com/200x50.png?text=AceHack2.0" alt="AceHack2.0" />
      </div>
      <div className="w-full h-full flex flex-row justify-end">
        <FancyButton link={"./computer"} data={"Register!"}/>
        <FancyButton link={"./computer"} data={"Schedule"}/>
        <FancyButton link={"./computer"} data={"Rules"}/>
        <FancyButton link={"./computer"} data={"About"}/>
      </div>
    </div>
  )
}

export default Navbar;