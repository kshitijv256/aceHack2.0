import React from "react";
import Member from "../components/Member";
import kshitij from "/assets/images/team/kshitij.jpg";
import sahitya from "/assets/images/team/sahitya.jpg";
import amar from "/assets/images/team/amar.jpg";
import priya from "/assets/images/team/priya.jpg";
import devdeep from "/assets/images/team/devdeep.jpg";
import dipendu from "/assets/images/team/dipendu.jpg";

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
          <Member image={sahitya} name="Sahitya Roy" role="Team Lead" />
          <Member image={amar} name="Amar Sansil" role="Technical" />
          <Member image={kshitij} name="Kshitij Verma" role="Web Developer" />
          <Member image={priya} name="Priya Chandak" role="Technical" />
          <Member image={devdeep} name="Devdeep Ghosh" role="Web Developer" />
          <Member image={dipendu} name="Dipendu" role="Technical" />
          <Member image="" name="Random" role="Technical" />
          <Member image="" name="Random" role="Technical" />
        </div>
      </section>
    </div>
  );
};

export default Team;