import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Navbar = ({ setDrawer }) => {
  return (
    <div className="father bg-[#fff0e8] h-[100px] w-full z-1000">
      <div className="flex justify-between items-center py-5 mx-auto max-w-6xl w-[90%] flex-col sm:flex-row gap-10 sm:gap-0 border-b-4 border-amber-500">
        <Link
          to={"/"}
          className="text-3xl font-bold underline decoration-dashed decoration-orange-500"
        >
          <span className="text-orange-500">Food</span> dash
          <span className="text-orange-500">.</span>
        </Link>
        <div className="flex gap-4">
          <button
            className="border-2 border-orange-500 p-2"
            onClick={() => setDrawer(true)}
          >
            🛒
          </button>
          <Link to={`/`}>
            <button className="bg-orange-500 rounded p-2 text-white hover:text-orange-500 hover:bg-white border-2 border-transparent hover:border-orange-500 transition">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
