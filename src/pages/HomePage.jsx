import React from "react";
import { Link } from "react-router-dom";

import img from "../assets/images/foods.png";
export const HomePage = () => {
  return (
    <div className="bg-[#fff0e8] min-h-[90vh]">
      <div className="hero max-w-6xl mx-auto w-[90%] pt-15 flex items-center flex-col md:flex-row text-center md:text-left">
        <div className="hero--content w-full md:w-[50%] flex flex-col gap-20">
          <h1 className="text-5xl font-bold">
            <span>Quick</span> and{" "}
            <span className="text-orange-500">Tasty</span> <br />
            <span className="text-orange-500">Food delivered</span> with{" "}
            <span className="text-orange-500">
              a <br /> Dash of
            </span>{" "}
            Speed
          </h1>

          <div className="hero--buttons-wrapper flex flex-col gap-5 mx-auto md:mx-0">
            <Link to={"/categories"}>
              <button className=" bg-orange-500 text-white w-75 rounded-full font-bold p-2 border-2 border-transparent hover:border-orange-500 hover:bg-white hover:text-orange-500 transition">
                Order Now
              </button>
            </Link>
            <button className="text-orange-500 bg-white w-75 border-2 border-orange-500 hover:bg-orange-500 rounded-full font-bold p-2 hover:text-white transition">
              Track Order
            </button>
          </div>
        </div>

        <div className="hero--img w-full md:w-[50%] mt-10 md:mt-0">
          <img src={img} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};
