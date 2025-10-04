import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-amber-300 p-5 flex justify-between items-center">
      <Link to={"/"} className="text-white text-3xl font-bold">
        React shop
      </Link>
      <Link to={`/`}>
        <button className="bg-white rounded p-2 hover:bg-yellow-500 hover:text-white transition">
          Go back
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
