import React from "react";
import Features from "../components/Features";
import Pictures from "../components/Pictures";

const application = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium scale-[4] md:scale-[5] lg:scale-[6] m-auto text-black css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TerminalIcon"><path d="M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4-4 4z"></path></svg>;

const Past = () => {
  return (
    <div className="text-white z-20 relative bg-indigo-900/50 backdrop-blur-lg w-full py-10">
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
        <div className="relative w-full flex gap-6 justify-start overflow-x-auto py-10 scrollbar-hide snap-x">
          {/* <div className="m-64"></div> */}
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
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
