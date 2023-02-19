import React from "react";
import Member from "../components/Member";
import kshitij from "/assets/images/team/kshitij_1.jpg";

const Team = () => {
  return (
    <div className="w-full bg-gray-800/30 backdrop-blur-md relative z-30">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Check our <span className="grad-text underline underline-offset-8 decoration-cyan-400">awesome</span> team
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Member image={kshitij} name="Kshitij Verma" role="Web Developer" />
          <Member image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" name="Random" role="Technical" />
          <Member image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" name="Random" role="Technical" />
        </div>
      </section>
    </div>
  );
};

export default Team;