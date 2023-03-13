import React from "react";
import { useState } from "react";


const Collapsible = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
      };
  return (
    <div>
      <button onClick={toggle} className="text-xl px-2 py-1">{props.label}</button>
      {open && (
        <div>
          <h4 className="text-lg bg-[#212a39] px-4 py-2 rounded-b-lg">{props.content}</h4>
        </div>
      )}
    </div>
  );
};
export default Collapsible;
