import React from "react";

const Features = (props) => {
  if (props.color === "blue") {
  return (
      <div className="flex flex-col items-center">
        <div className="rounded-[50%] bg-blue-500/80 p-4 m-3 ring-[6px] hover:bg-blue-500">
          <img src={props.icon} alt="" srcset="" className="h-32 w-32 scale-75" />
        </div>
        <p className="my-2 font-bold text-4xl text-blue-400">{props.count}+</p>
        <p className="font-semibold text-blue-400 text-xl">{props.text}</p>
      </div>
  );
  } else if (props.color === "fuchsia") {
    return (
      <div className="flex flex-col items-center">
        <div className="rounded-[50%] bg-fuchsia-500/80 p-4 m-3 ring-[6px] ring-fuchsia-700 hover:bg-fuchsia-500">
          <img src={props.icon} alt="" srcset="" className="h-32 w-32 scale-75" />
        </div>
        <p className="my-2 font-bold text-4xl text-fuchsia-400">{props.count}+</p>
        <p className="font-semibold text-fuchsia-400 text-xl">{props.text}</p>
      </div>
    );
  }
}

export default Features;