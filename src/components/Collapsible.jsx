import React from "react";
import { useState } from "react";


const Collapsible = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
      };
  return (
    <div>
      <button onClick={toggle} className="bg-red-400 px-2 py-1">{props.label}</button>
      {open && (
        <div>
          <h4 className="text-5xl">{props.content}</h4>
        </div>
      )}
    </div>
  );
};
export default Collapsible;
