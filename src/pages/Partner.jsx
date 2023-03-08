import React from "react";

const Partner = () => {
  return (
    <div
      id="partner"
      className="py-16 text-white z-20 relative bg-violet-900/30 backdrop-blur-lg w-full flex flex-col items-center text-center"
    >
      <h1 className="text-5xl font-bold"><span className="grad-text">Community</span> Partners</h1>
      <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
        <a href="https://nsb.dev/solana-bounty" target={"_blank"}>
          {/* <Icon icon={solana} height="h-24 px-4 py-6" /> */}
          <div>// To add</div>
        </a>
      </div>
      <h1 className="text-5xl font-bold">Hackathon <span className="grad-text">Evangelist</span></h1>
      <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
        <a href="https://nsb.dev/solana-bounty" target={"_blank"}>
          {/* <Icon icon={solana} height="h-24 px-4 py-6" /> */}
          <div>// To add</div>
        </a>
      </div>
    </div>
  );
};

export default Partner;
