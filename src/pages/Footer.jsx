import React from "react";
import Icon from "../components/Icon";

import instagram from "/assets/images/instagram.png";
import linkedin from "/assets/images/linkedin.png";
import twitter from "/assets/images/twitter.png";
import email from "/assets/images/email.png";

import uem from "/assets/images/uem.png";
import acm from "/assets/images/acm.jpeg";

const Footer = () => {
  return (
    <div className="relative z-20 text-white flex flex-col w-full bg-gray-800">
      <div className="flex flex-col sm:flex-row my-4">
        <div className="flex flex-col ml-16 sm:w-[25%] mt-4">
          <h1 className="text-2xl">Follow us</h1>
          <div className="flex flex-row items-center">
            <a href="https://www.instagram.com/acehack2.0/">
              <div className="rounded-[50%] bg-fuchsia-500 p-1 my-3 mr-4 w-12">
                <img
                  src={instagram}
                  alt=""
                  className="h-10 w-10"
                />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/acehack-2-0/">
              <div className="rounded-[50%] bg-blue-500 p-1 my-3 mr-4 w-12">
                <img
                  src={linkedin}
                  alt=""
                  className="h-10 w-10"
                />
              </div>
            </a>
            <a href="">
              <div className="rounded-[50%] bg-red-500 p-1 my-3 mr-4 w-12">
                <img
                  src={email}
                  alt=""
                  className="h-10 w-10"
                />
              </div>
            </a>
            <a href="">
              <div className="rounded-[50%] bg-blue-400 p-1 my-3 mr-4 w-12">
                <img
                  src={twitter}
                  alt=""
                  className="h-10 w-10"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-16 my-4">
          <h1 className="text-2xl">Contact us</h1>
          <p className="text-gray-400">email: ab@email.com</p>
        </div>
      </div>
      <div className="sm:ml-24 flex flex-col sm:flex-row justify-end items-center px-4">
        <Icon icon={uem} />
        <Icon icon={acm} />
      </div>
      <div className="bg-gray-900 capitalize text-gray-500 p-2 text-right px-4 flex sm:flex-row flex-col items-start justify-between sm:px-8">
        <div>
          © 2023 Acehack 2.0
        </div>
        <div>
        All rights reserved.
        </div>
        <div>
        designed by:&nbsp; <a href="https://github.com/kshitijv256" target={"_blank"} className="grad-text">kshitij verma</a> &
        <a href="https://github.com/thedevildude" target={"_blank"} className="grad-text"> devdeep</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
