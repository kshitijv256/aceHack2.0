import React from "react";
import { useState, useRef } from "react";

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const contentRef = useRef();
  return (
    <div className={`${props.style}`}>
      <button onClick={toggle} className="text-xl px-2 py-1">
        {props.label}
      </button>
      <div
        className="hide text-left"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <h4 className="text-lg bg-[#212a39] px-4 py-2 rounded-b-lg">
          {props.children}
        </h4>
      </div>
    </div>
  );
};
export default Collapsible;
