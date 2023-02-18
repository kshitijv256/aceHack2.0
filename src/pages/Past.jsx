import React from "react";
import Features from "../components/Features";

const Past = () => {
  return (
    <div className="text-white z-50 relative bg-indigo-900 w-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold p-4 my-4">
          <span className="grad-text">AceHack 1.0</span> Highlights!
        </h1>
        <div className="flex flex-row justify-evenly w-full p-10">
          <Features icon="1..." text="topic" />
          <Features icon="2..." text="topic" />
          <Features icon="3..." text="topic" />
          <Features icon="4..." text="topic" />
        </div>
      
        <h1 className="grad-text text-4xl font-bold py-6">Pictures</h1>

        <div class="relative w-full flex gap-6 overflow-x-auto pb-14 scrollbar-hide hover:scroll-smooth">
          <div className=" shrink-0 mx-2">
            <div className="shrink-0 w-4 sm:w-10"></div>
          </div>
          <div class=" shrink-0 mx-2">
            <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            className="rounded-lg shadow-xl hover:shadow-cyan-700" />
          </div>
          <div class=" shrink-0 mx-2">
            <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            className="rounded-lg shadow-xl hover:shadow-cyan-700" />
          </div>
          <div class=" shrink-0 mx-2">
            <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            className="rounded-lg shadow-xl hover:shadow-cyan-700" />
          </div>
          <div class=" shrink-0 mx-2">
            <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            className="rounded-lg shadow-xl hover:shadow-cyan-700" />
          </div>
          <div class=" shrink-0 mx-2">
            <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            className="rounded-lg shadow-xl hover:shadow-cyan-700" />
          </div>
          <div class=" shrink-0 mx-2">
            <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            className="rounded-lg shadow-xl hover:shadow-cyan-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Past;
