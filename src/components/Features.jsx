import React from "react";

const Features = (props) => {
  return (
      <div className="flex flex-col items-center">
        <div className="rounded-[50%] bg-blue-500/80 p-4 m-3 ring-[6px] hover:bg-blue-500">{props.icon}</div>
        <p>{props.text}</p>
      </div>
  );
}

export default Features;