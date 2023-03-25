import React from "react";
import Member from "../components/Member";

import aishwarya from "/assets/images/speakers/aishwarya.jpeg";
import abhimanyu from "/assets/images/speakers/abhimanyu.jpeg";
import abhinav from "/assets/images/speakers/abhinav.jpeg";
import ayushman from "/assets/images/speakers/ayushman.jpeg";
import kanav from "/assets/images/speakers/kanav.jpeg";
import kanishak from "/assets/images/speakers/kanishak.jpeg";
import manank from "/assets/images/speakers/manank.jpeg";
import prajakta from "/assets/images/speakers/prajakta.jpeg";
import rishabh from "/assets/images/speakers/rishabh.jpeg";
import samarth from "/assets/images/speakers/samarth.jpeg";
import sheetal from "/assets/images/speakers/sheetal.jpeg";
import shyaamal from "/assets/images/speakers/shyaamal.jpeg";
import vishek from "/assets/images/speakers/vishek.jpeg";
import khushi from "/assets/images/speakers/khushi.jpeg";
import nishant from "/assets/images/speakers/nishant.jpeg";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Speakers = () => {
  return (
    <div className="relative items-center justify-center bg-gray-900/30 backdrop-blur-lg w-full z-20 py-10 scroll-smooth">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="flex flex-row justify-center w-full">
          <h1 className="grad-text font-bold text-5xl mb-10">Mentors</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Member
            image={sheetal}
            name="Sheetal Jain"
            social={
              <a
                href="https://twitter.com/Sheetal2205"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaTwitter />
              </a>
            }
          />
          <Member
            image={abhinav}
            name="Abhinav Sharma"
            social={
              <a
                href="https://www.linkedin.com/in/abhinavsharma0/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
          <Member
            image={samarth}
            name="Samarth Saxena"
            social={
              <a
                href="https://www.linkedin.com/in/samarth-saxena-169430178/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
          <Member
            image={prajakta}
            name="Prajakta kadam"
            social={
              <a
                href="https://www.linkedin.com/in/prajaktak8/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
          <Member
            image={rishabh}
            name="Rishabh Sharma"
            social={
              <a
                href="https://www.linkedin.com/in/rishabhsharma2023/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
          <Member
            image={shyaamal}
            name="Shyaamal Tripathi"
            social={
              <a
                href="https://www.linkedin.com/in/shyaamal-tripathi-a389051b3/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
          <Member
            image={vishek}
            name="Vishek  Pratap"
            social={
              <a
                href="https://www.linkedin.com/in/vishekpratap/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
          <Member
            image={ayushman}
            name="Ayushman Pandita"
            social={
              <a
                href="https://www.instagram.com/xyushmxn/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaInstagram />
              </a>
            }
          />
          <Member
            image={kanav}
            name="Kanav Bhagat"
            social={
              <a
                href="https://www.instagram.com/formula.guy/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaInstagram />
              </a>
            }
          />
          <Member
            image={abhimanyu}
            name="Abhimanyu Shekhawat"
            social={
              <a
                href="https://www.linkedin.com/in/abhimanyu-shekhawat-886896168/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
          <Member
            image={manank}
            name="Manank Patni"
            social={
              <a
                href="https://www.linkedin.com/in/manankpatni/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
          <Member
            image={aishwarya}
            name="Aishwarya Suresh"
            social={
              <a
                href="https://www.linkedin.com/in/aishwaryasuresh17/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
          <Member
            image={kanishak}
            name="Kanishak chaurasia"
            social={
              <a
                href="https://www.linkedin.com/in/kanishak-chaurasia-1101/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
          <Member
            image={nishant}
            name="Nishant Mishra"
            social={
              <a
                href="https://www.linkedin.com/in/curlyparadox/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
          <Member
            image={khushi}
            name="Khushi Naudiyal"
            social={
              <a
                href="https://www.linkedin.com/in/khushi-naudiyal-a0647718a/"
                className="text-2xl text-gray-400"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Speakers;
