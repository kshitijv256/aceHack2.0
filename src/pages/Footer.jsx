import React from "react";
import Icon from "../components/Icon";

const Footer = () => {
  return (
    <div className="relative z-20 text-white flex flex-col w-full bg-gray-800">
      <div className="flex flex-row my-4">
        <div className="flex flex-col ml-24 sm:w-[25%]">
          <h1 className="text-2xl">Follow us</h1>
          <div className="flex flex-row">
            <a href="https://www.instagram.com/acehack2.0/">
            <div className="rounded-[50%] bg-fuchsia-500 p-1 my-3 mr-4">
              <img
                src="/assets/images/instagram.png"
                alt=""
                srcset=""
                className="h-10 w-10"
              />
            </div>
            </a>
            <a href="https://www.linkedin.com/company/acehack-2-0/">
            <div className="rounded-[50%] bg-blue-500 p-1 my-3 mr-4">
              <img
                src="/assets/images/linkedin.png"
                alt=""
                srcset=""
                className="h-10 w-10"
              />
            </div>
            </a>
            <a href="">
            <div className="rounded-[50%] bg-red-500 p-1 my-3 mr-4">
              <img
                src="/assets/images/email.png"
                alt=""
                srcset=""
                className="h-10 w-10"
              />
            </div>
            </a>
            <a href="">
            <div className="rounded-[50%] bg-blue-400 p-1 my-3 mr-4">
              <img
                src="/assets/images/twitter.png"
                alt=""
                srcset=""
                className="h-10 w-10"
              />
            </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-24">
          <h1 className="text-2xl">Contact us</h1>
          <p className="text-gray-400">email: ab@email.com</p>
        </div>
      </div>
      <div className="ml-24 flex flex-row justify-end px-4">
        <Icon icon="/assets/images/uem.png"/>
        <Icon icon="/assets/images/acm.jpeg"/>
      </div>
      <div className="bg-gray-900 capitalize text-gray-500 p-2 text-right px-4">
        designed by: <span className="grad-text">kshitij verma</span>
      </div>
    </div>
  );
};

export default Footer;
