import React from "react";
import Features from "../components/Features";
import Pictures from "../components/Pictures";

const Past = () => {
  return (
    <div className="text-white z-20 relative bg-indigo-900/50 backdrop-blur-lg w-screen py-10">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold pb-10 flex-wrap">
          <span className="grad-text">AceHack 1.0</span> Highlights!
        </h1>
        <div className="flex sm:flex-row justify-evenly w-full p-10 flex-col">
          <Features icon="1..." text="topic" />
          <Features icon="2..." text="topic" />
          <Features icon="3..." text="topic" />
          <Features icon="4..." text="topic" />
        </div>
        <h1 className="grad-text text-4xl font-bold py-6">Pictures</h1>
        <div className="relative w-full flex gap-6 justify-center overflow-x-auto pb-14 scrollbar-hide hover:scroll-smooth">
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
        </div>
      </div>
    </div>
  );
};

export default Past;
