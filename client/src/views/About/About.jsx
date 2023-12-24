import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaLinkedin, FaSquare, FaGithub } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function About() {
  return (
    <div>
      <Navbar />
      <h1 className="font-bold text-4xl my-5 text-center text-red-500">
        About Budget Buddy
      </h1>
      <div className="lg:w-3/6 sm:w-full mx-auto mt-10 bg-red-50 rounded-lg shadow-lg border-2 border-red-700 p-5">
        <p className="text-center">
          <span className="text-red-800 font-bold text-3xl">Budget Buddy </span>
          is a user-friendly financial management application designed to help
          you take charge of your finances with confidence. Whether you're
          saving for a dream vacation, planning for a major purchase, or just
          aiming to build a robust financial foundation, Budget Buddy is here to
          guide you every step of the way.
        </p>
        <div className="flex justify-center items-center flex-wrap mt-10">
          <div className="">
            <img
              src="https://avatars.githubusercontent.com/u/124028591?s=300&u=aa537362cb3bb36fc108e809fd0227c5ed90108d"
              alt=""
              className="h-48 mx-auto mt- rounded-xl"
            />
          </div>
          <div className="p-4 w-full sm:w-96">
            <div className="h-auto bg-slate-100 rounded-xl border border-red-500 p-4">
              <p className="">
                I am a passionate{" "}
                <b className="text-red-800">MERN stack web developer</b> who has
                developed this expense tracker to help those people who need to
                take control of their expenses or make savings.{" "}
                <span className="font-bold">Connect With Me..</span>
              </p>
              <div className="social-media-container flex justify-around items-center mt-3 sm:mt-1 ">
                <a
                  href="https://www.linkedin.com/in/saurabh-jaykar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin className="text-3xl text-blue-800" />
                </a>
                <a
                  href="https://github.com/saurabhjaykar1603"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithub className="text-3xl text-black-800" />
                </a>
                <a
                  href="https://peerlist.io/saurabhjaykar16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiPeerlist className="text-3xl text-green-800" />
                </a>
                <a
                  href="mailto:jaykarsaurabh97@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdEmail className="text-3xl text-slate-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
