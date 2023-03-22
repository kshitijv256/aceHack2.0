import React from "react";

const PrizeItem = (props) => {
    return (
        <div className="flex flex-col bg-slate-700 my-4 border-8 border-cyan-400 rounded-xl w-80 h-80">
              <h2 className="text-3xl font-bold px-4 py-5">
              {props.title}
              </h2>
              <p className={`text-4xl ${props.color} text- font-semibold py-5 px-4`}>
              {props.prize}
              </p>
            </div>
    );
};

export default PrizeItem;