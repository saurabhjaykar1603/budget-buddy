import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import homePng from "./home.png";
import featImg from "./featcher.png";
import { MdDelete, MdLibraryAdd } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div class="container mx-auto flex  items-center flex-col md:flex-row justify-evenly">
        <div class="md:w-1/2 p-4">
          <h1 class="text-5xl font-bold mb-4">
            Welcome to <span className="text-red-700">Budget Buddy !</span>
          </h1>
          <p class="text-gray-700">
            Our easy-to-use expense tracker lets you add, delete, and update
            transactions with a breeze. Set realistic budgets, gain insights
            into your spending, and stay in control. Whether you're a budgeting
            pro or just starting, Budget Buddy supports you every step of the
            way. Say goodbye to financial stress and hello to a more organized
            financial future!
          </p>
          <div className="mt-8">
         <Link to="/login">   <button  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
              <div className="flex justify-center items-center gap-x-2 font-bold">
                <span>Get Started</span>{" "}
                <span>
                  <BsRocketTakeoff />
                </span>
              </div>
            </button> </Link>
          </div>
        </div>

        <div class="md:w-1/2 p-2">
          <img
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine"
            src={homePng}
            alt="Right Side Image"
            class="h-[400px] rounded-md block mx-auto"
          />
        </div>
      </div>

      <section>
        <div className=" container mx-auto mt-10 ">
          <div class="flex flex-wrap gap-x-3 items-center justify-evenly">
            <div className="w-50 py-2">
              <img src={featImg} alt="" className="h-[260px] block mx-auto" />
            </div>
            <div className="left w-50">
              <div className="flex flex-wrap justify-evenly gap-x-3 gap-y-3 items-center mb-4">
                <div className="card w-80 py-12 bg-slate-50 border-2 border-red-400 rounded-lg  shadow-md relative">
                  <MdLibraryAdd className="text-red-500 border-2 p-[5px]  shadow-md border-slate-500 text-[45px] rounded block mx-auto absolute top-4 left-4" />
                  <p className="absolute bottom-2 text-[19px ] font-bold left-16">
                    {" "}
                    Add Your All Transactions
                  </p>
                </div>
                <div className="card w-80 py-12 bg-slate-50 border-2 border-red-400 rounded-lg  shadow-md relative">
                  <FaClipboardList className="text-red-500 border-2 p-[6px]  shadow-md border-slate-500 text-[45px] rounded block mx-auto absolute top-4 left-4" />
                  <p className="absolute bottom-2 text-[19px ] font-bold left-16">
                    {" "}
                    See Your All Transactions List
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-evenly gap-x-3 gap-y-3 items-center mb-4">
                <div className="card w-80 py-12 bg-slate-50 border-2 border-red-400 rounded-lg  shadow-md relative">
                  <FaEdit className="text-red-500 border-2 p-[6px]  shadow-md border-slate-500 text-[45px] rounded block mx-auto absolute top-4 left-4" />
                  <p className="absolute bottom-2 text-[19px ] font-bold left-16">
                    {" "}
                    Edit Your Transactions
                  </p>
                </div>
                <div className="card w-80 py-12 bg-slate-50 border-2 border-red-400 rounded-lg  shadow-md relative">
                  <MdDelete className="text-red-500 border-2 p-[3px]  shadow-md border-slate-500 text-[45px] rounded block mx-auto absolute top-4 left-4" />
                  <p className="absolute bottom-2 text-[19px ] font-bold left-16">
                    {" "}
                    Delete Your Transactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
