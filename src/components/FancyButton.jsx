import React from "react";

const FancyButton = (props) => {
  const handleClickScroll = () => {
    const element = document.getElementById(props.id);
    if (props.id === "home") {
      document.documentElement.scrollTop=0;
    }
    else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
        <button className="hover:translate-x-1 hover:translate-y-1 hover:shadow-none uppercase bg-cyan-400 font-semibold text-xl h-2/3 px-4 rounded-sm cursor-pointer button-shadow"
          onClick={handleClickScroll}>
          {props.data}
        </button>
  );
};

export default FancyButton;