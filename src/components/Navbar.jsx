import { useState } from "react";
import FancyButton from "./FancyButton";
import AceHackSm from "/assets/images/AceHack-sm-logo.png"
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export const Navbar = () => {

  const [closed, setClosed] = useState(true);
  const [scale, setScale] = useState("scale-0");
  const [height, setHeight] = useState("h-0");

  const clickHandler = () => {
    if (height == "h-0") setHeight("min-h-screen");
    else if(height == "min-h-screen") setHeight("h-0");
    if (scale === "scale-0") setScale("scale-100");
    else if (scale === "scale-100") setScale("scale-0");
    setClosed(!closed)
  }

  return (
    <div className={`bg-gray-900/30 w-full fixed top-0 z-30 backdrop-blur-md md:h-auto ${height}`}>
      <IconContext.Provider
        value={{ style: { fontSize: "2rem", position: "relative", color: "white" } }}
      >
        <div onClick={clickHandler}>
          {(closed && <FaBars className="md:hidden w-10 h-10 pl-4 py-1" />) ||
            (!closed && <MdOutlineClose className="md:hidden w-10 h-10 pl-4 py-1" />)}
        </div>
        <div>
          <div className="flex justify-between items-center">
            <img src={AceHackSm} alt="AceHack2.0" className="hidden lg:block object-contain" />
            <div className="hidden space-x-6 md:flex flex-row items-center justify-center lg:justify-end w-full px-6 py-4">
              <FancyButton id={"home"} data={"Register"} />
              <FancyButton id={"about"} data={"About"} />
              <FancyButton id={"past"} data={"Acehack 1.0"} />
              <FancyButton id={"themes"} data={"Themes"} />
              <FancyButton id={"team"} data={"Team"} />
            </div>
            <div className={`${scale} md:hidden py-20 gap-8 flex flex-col w-[60%] ml-[20%] transition ease-in delay-100 duration-200`}>
              <FancyButton id={"home"} data={"Register"} />
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