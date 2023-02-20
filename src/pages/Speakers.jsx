import React from "react";
import Member from "../components/Member";

const Speakers = () => {
  return (
    <div className="relative items-center justify-center bg-gray-900/30 backdrop-blur-lg w-full z-20 py-10">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="flex flex-row justify-center w-full"><h1 className="grad-text font-bold text-5xl mb-10">Past speakers</h1></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Member image="/assets/images/speakers/sandeep.jpg" name="Sandeep Jain" role="Founder & CEO at GeeksforGeeks" />
        <Member image="/assets/images/speakers/kunal.jpg" name="Kunal Kushwaha" role="DevRel manager at Civo, Founder at WeMakeDevs" />
        <Member image="/assets/images/speakers/osheen.jpg" name="Osheen Mahajan" role="Co-founder Psych Up!" />
        <Member image="/assets/images/speakers/keerti.jpg" name="Keerti Purswani" role="Youtuber, SDE-II at Intuit" />
        <Member image="/assets/images/speakers/Praveen.png" name="Praveen Kumar Purushothaman" role="Youtuber, Full Stack Web Developer" />
        <Member image="/assets/images/speakers/ishan.jpg" name="Ishan Sharma" role="Co-Founder at Markitup, Youtuber" />
      </div>
      </section>
    </div>
  );
};

export default Speakers;
