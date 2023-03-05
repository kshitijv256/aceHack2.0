import React from "react";
import Member from "../components/Member";
import kshitij from "/assets/images/team/kshitij.jpeg";
import sahitya from "/assets/images/team/sahitya.jpg";
import amar from "/assets/images/team/amar.jpg";
import priya from "/assets/images/team/priya.jpg";
import devdeep from "/assets/images/team/devdeep.jpg";
import dipendu from "/assets/images/team/dipendu.jpeg";
import shanu from "/assets/images/team/shanu.jpeg";
import snehasis from "/assets/images/team/snehasis.jpeg";
import soumalya from "/assets/images/team/soumalya.jpeg";
import rohit from "/assets/images/team/rohit.jpeg";
import aman from "/assets/images/team/aman.jpeg";
import swarnava from "/assets/images/team/swarnava.jpeg";
import indira from "/assets/images/team/indira.jpeg";

const Team = () => {
  return (
    <div id="team" className="pt-24 w-full bg-gray-800/30 backdrop-blur-md relative z-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Check our <span className="grad-text underline underline-offset-8 decoration-cyan-400">awesome</span> team
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Member image={sahitya} name="Sahitya Roy" role="Organizer" />
          <Member image={amar} name="Amar Sansil" role="Organizer" />
          <Member image={priya} name="Priya Chandak" role="Organizer" />
          <Member image={kshitij} name="Kshitij Verma" role="Web Developer" />
          <Member image={devdeep} name="Devdeep Ghosh" role="Web Developer" />
          <Member image={swarnava} name="Swarnava Das" role="Operations" />
          <Member image={dipendu} name="Dipendu" role="Graphics Designer & Photographer" />
          <Member image={aman} name="Aman Kumar" role="Graphics & Video editor" />
          <Member image={snehasis} name="Snehasis Bhakat" role="Operations" />
          <Member image={shanu} name="Shanu" role="Operations" />
          <Member image={soumalya} name="Soumalya" role="Operations" />
          <Member image={rohit} name="Rohit" role="Operations" />
          <Member image={indira} name="Indira" role="Operations" />
        </div>
      </section>
    </div>
  );
};

export default Team;