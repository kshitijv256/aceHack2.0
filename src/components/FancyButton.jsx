import React from "react";

const FancyButton = ({link, data}) => {
  return (
    <button className="hover:bg-cyan-900/30 hover:text-cyan-500 text-white font-bold text-xl h-full px-4 mx-4 rounded-sm" href={link}>{data}</button>
  )
}

export default FancyButton;