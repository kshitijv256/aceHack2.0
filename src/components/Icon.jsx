import React from "react";

const Icon = ({ icon, text }) => {
    return (
        <div className="flex flex-col items-center mx-4">
        <div className="flex justify-center items-center p-1 bg-white">
            <img src={icon} srcset="" className="h-16" />
        </div>
        <h1 className="text-white font-bold text-xl mt-4">{text}</h1>
        </div>
    );
};

export default Icon;