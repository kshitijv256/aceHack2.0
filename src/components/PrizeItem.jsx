import React from "react";

const PrizeItem = (props) => {
    return (
        <div className="rounded border-b-2 border-gray-700 m-4 flex flex-row flex-wrap justify-start text-start md:justify-between">
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