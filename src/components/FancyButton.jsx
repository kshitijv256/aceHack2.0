import React from "react";

const FancyButton = (props) => {
  const handleClickScroll = () => {
    const element = document.getElementById(props.id);
    if (props.id === "home") {
      document.documentElement.scrollTop=0;
    }
    else if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
        <button className="hover:bg-cyan-900/30 hover:text-cyan-500 text-white font-bold text-xl h-full px-4 mx-4 rounded-sm" onClick={handleClickScroll}>
          {props.data}
        </button>
  );
};

export default FancyButton;