import React from "react";

const Sponsers = (props) => {
  return (
    <div className="flex flex-col items-center bg-indigo-400 rounded-md hover:shadow-lg hover:shadow-indigo-600 my-10 p-4">
      <img src={props.img} alt="AceHack 1.0" />
      <h1 className="text-xl font-bold p-4 my-4">{props.text}</h1>
    </div>
  );
};

export default Sponsers;
