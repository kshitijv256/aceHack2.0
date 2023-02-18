import React from "react";

const FancyButton = ({link, data}) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={link}>{data}</button>
  )
}

export default FancyButton;