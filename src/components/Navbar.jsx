import React from "react";
import FancyButton from "./FancyButton";

export const Navbar = () => {
  return (
    <div className="w-full p-5 bg-purple-800 flex justify-between content-center">
      <div>
        <img src="https://via.placeholder.com/200x50.png?text=AceHack2.0" alt="AceHack2.0" />
      </div>
      <div className="w-full flex gap-10 justify-end">
        <FancyButton link={"./computer"} data={"Button 1"}/>
        <FancyButton link={"./computer"} data={"Button 2"}/>
        <FancyButton link={"./computer"} data={"Button 3"}/>
      </div>
    </div>
  )
}

export default Navbar;