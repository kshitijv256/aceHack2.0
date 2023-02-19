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
        <button className="hover:translate-x-1 hover:translate-y-1 hover:shadow-none uppercase bg-indigo-100 font-semibold text-xl h-3/4 px-7 rounded-sm cursor-pointer button-shadow"
          onClick={handleClickScroll}>
          {props.data}
        </button>
  );
};

export default FancyButton;