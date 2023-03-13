import React from "react";
import Collapsible from "../components/Collapsible";

const Faq = () => {
  return (
    <div
      id="faq"
      className="relative scroll-smooth bg-[#171f2c] w-full text-white p-10"
    >
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">FAQs</h1>
        <Collapsible
          label="What is a Hackathon?"
          content="A hackathon is a design sprint-like event in which computer 
          programmers and others involved in software development, 
          including graphic designers, interface designers, project managers, 
          domain experts, and others, collaborate intensively on software projects. 
          A hackathon typically lasts between a day and a week."
        />
      </div>
    </div>
  );
};

export default Faq;
