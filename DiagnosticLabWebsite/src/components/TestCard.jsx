import React from "react";
import { NavLink } from "react-router-dom";

function TestCard({ heading, rate, des }) {
  return (
    <div
      className="
    
        flex flex-col justify-between
        p-5
        border border-gray-300
        rounded-lg
        transition-all duration-300
        hover:scale-105
        hover:bg-gradient-to-br hover:from-blue-700 hover:to-gray-300 hover:text-white

        w-full
        sm:max-w-sm
        md:max-w-sm
        lg:max-w-md

        min-h-[280px]
        cursor-pointer
      "
    >
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
          {heading}
        </h1>

        <h2 className="text-base sm:text-lg md:text-xl font-semibold mt-2">
          {rate}
        </h2>

        <p className="font-mono mt-2 text-sm sm:text-base">{des}</p>
      </div>

      <NavLink to="/BookTest" className="mt-4">
        <button className="w-full py-2 rounded-md bg-blue-700 text-white font-medium hover:bg-blue-800 transition">
          Book Now
        </button>
      </NavLink>
    </div>
  );
}

export default TestCard;
