import React from "react";

const Icon = ({ icon, text, height }) => {
    return (
        <div className="flex flex-col items-center mx-4">
        <div className="flex justify-center items-center bg-gray-900">
            <img src={icon} className={height} />
        </div>
        <h1 className="text-white font-bold text-xl mt-4">{text}</h1>
        </div>
    );
};

export default Icon;