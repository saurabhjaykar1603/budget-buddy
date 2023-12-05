import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import homePng from "./home.png";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div class="container mx-auto flex  items-center flex-col md:flex-row">
        <div class="md:w-1/2 p-4">
          <h1 class="text-5xl font-bold mb-4">Welcome to <span className="text-red-700">Budget Buddy !</span></h1>
          <p class="text-gray-700">
          Our easy-to-use expense tracker lets you add, delete, and update transactions with a breeze. Set realistic budgets, gain insights into your spending, and stay in control. Whether you're a budgeting pro or just starting, Budget Buddy supports you every step of the way. Say goodbye to financial stress and hello to a more organized financial future!
          </p>
        </div>

        <div class="md:w-1/2 p-4">
          <img
            src={homePng}
            alt="Right Side Image"
            class="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
