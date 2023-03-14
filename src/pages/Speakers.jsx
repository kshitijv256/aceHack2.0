import React from "react";
import Member from "../components/Member";

import sandeep from "/assets/images/speakers/sandeep.jpg";
import kunal from "/assets/images/speakers/kunal.jpg";
import shambhavi from "/assets/images/speakers/shambhavi.jpeg";
import keerti from "/assets/images/speakers/keerti.jpg";
import praveen from "/assets/images/speakers/Praveen.jpg";
import ishan from "/assets/images/speakers/ishan.jpg";

const Speakers = () => {
  return (
    <div className="relative items-center justify-center bg-gray-900/30 backdrop-blur-lg w-full z-20 py-10 scroll-smooth">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="flex flex-row justify-center w-full"><h1 className="grad-text font-bold text-5xl mb-10">Past speakers</h1></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Member image={sandeep} name="Sandeep Jain" role="Founder & CEO at GeeksforGeeks" />
        <Member image={kunal} name="Kunal Kushwaha" role="DevRel manager at Civo, Founder at WeMakeDevs" />
        <Member image={ishan} name="Ishan Sharma" role="Co-Founder at Markitup, Youtuber" />
        <Member image={keerti} name="Keerti Purswani" role="Youtuber, SDE-II at Intuit" />
        <Member image={shambhavi} name="Shambhavi Gupta" role="Youngest Data Science and DSA Educator |Instructor at Udemy" />
        <Member image={praveen} name="Praveen Kumar Purushothaman" role="Youtuber, Full Stack Web Developer" />
      </div>
      </section>
    </div>
  );
};

export default Speakers;
