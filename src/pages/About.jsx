import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900/50 via-blue-900/50 to-cyan-900/50 backdrop-blur-lg scroll-smooth w-screen">
      <div className="flex flex-col text-white text-center p-5 font-mono">
        <h1 className="text-4xl font-bold p-4">
          <span className="grad-text">AceHack 2.0</span>  Hackathon is here!
        </h1>
        <div className="text-xl mx-6 md:mx-56 text-justify mt-6 space-y-4">
          <p>
            This March, ACM-UEM Chapter proudly announces the comeback of our
            in-person hackathon with AceHack 2.0!
          </p>
          <p>
            We aspire to empower our student community and encourage students to
            realize their potential in safe spaces.
          </p>
          <p>
            Our hackathon`s motto, “Dream It, Hack It”, epitomizes these
            aspirations and encourages hackers to free themselves from their
            inhibitions and make their dreams come to life. We believe the most
            significant prize any student can win is knowing that they have what
            it takes to create beautiful work from the most basic blocks: ones
            and zeros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
