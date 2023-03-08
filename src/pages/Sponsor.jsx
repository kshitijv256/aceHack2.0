import React from "react";
import FancyButton from "../components/FancyButton";
import Icon from "../components/Icon";

import uem from "/assets/images/uem.png";
import acm from "/assets/images/acm.jpeg";
import iic from "/assets/images/iic.jfif";

import echo3D from "/assets/images/sponsors/echo3D.png";
import sticker_mule from "/assets/images/sponsors/sticker_mule.png";
import wolfram from "/assets/images/sponsors/wolfram.svg";
import devfolio from "/assets/images/sponsors/devfolio.png";
import replit from "/assets/images/sponsors/replit.png";
import polygon from "/assets/images/sponsors/polygon.png";
import solana from "/assets/images/sponsors/solana.svg";
import filecoin from "/assets/images/sponsors/filecoin.png";
import balsamiq from "/assets/images/sponsors/balsamiq.png";
import beeseptor from "/assets/images/sponsors/beeseptor.svg";

const Sponsor = () => {
  return (
    <div
      id="sponsor"
      className="py-16 text-white z-20 relative bg-blue-900/30 backdrop-blur-lg w-full"
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold pb-10">
          Our <span className="grad-text">Assosiate </span>Partners
        </h1>
        <div className="flex flex-row flex-wrap">
          <Icon icon={uem} height="h-28" />
          <Icon icon={acm} height="h-28" />
          <Icon icon={iic} height="h-28" />
        </div>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Title</span> Sponsors
        </h1>
        <p>...Coming Soon</p>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Platinum</span> Sponsors
        </h1>
        <p>...Coming Soon</p>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Gold</span> Sponsors
        </h1>
        <p>...Coming Soon</p>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Silver</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://devfolio.co/">
          <Icon icon={devfolio} height="h-28 px-4 py-6" />
          </a>
          <a href="https://nsb.dev/polygon-bounty" target={"_blank"}>
            <Icon icon={polygon} height="h-28 px-4 py-6" />
          </a>
        </div>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Bronze</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://nsb.dev/solana-bounty" target={"_blank"}>
            <Icon icon={solana} height="h-24 px-4 py-6" />
          </a>
          <a href="https://nsb.dev/replit-bounty" target={"_blank"}>
            <Icon icon={replit} height="h-28 px-4 py-6" />
          </a>
          <a href="https://nsb.dev/filecoin-bounty" target={"_blank"}>
            <Icon icon={filecoin} height="h-28 px-4 py-6" />
          </a>
          <a href="https://beeceptor.com/" target={"_blank"}>
            <Icon icon={beeseptor} height="h-28 px-4 py-6" />
          </a>
        </div>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">In-Kind</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://www.echo3d.com/">
          <Icon icon={echo3D} height="h-28" />
          </a>
          <a href="https://www.wolfram.com/">
            <Icon icon={wolfram} height="h-24 px-4 py-6" />
          </a>
          <a href="https://mule.to/p3tf">
            <Icon icon={sticker_mule} height="h-28" />
          </a>
          <a href="https://balsamiq.cloud/">
            <Icon icon={balsamiq} height="h-28" />
          </a>
        </div>
        <p className="text-4xl font-extrabold pt-10">
          Become a{" "}
          <span className="underline-offset-8 underline decoration-cyan-300">
            sponsor
          </span>{" "}
          of <b className="grad-text"> AceHack 2.0</b>{" "}
        </p>
        <a
          href="https://drive.google.com/file/d/1exvKjjxlDWIuIE9T52nVFuAudWuvh3cV"
          target={"_blank"}
          className="mt-10 text-black"
        >
          <FancyButton data="Sponsor Us" />
        </a>
      </div>
    </div>
  );
};

export default Sponsor;
