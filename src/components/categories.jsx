import React from "react";
import { Link } from "react-router-dom";
import MyLoader from "./ReactSkeleton";

export const Categories = ({ data, loading, error }) => {
  if (loading) {
    return (
      <>
        <MyLoader /> <MyLoader /> <MyLoader /> <MyLoader />
      </>
    );
  }
  if (error) {
    return (
      <div className="text-5xl text-red-400">
        Sorry and error occured: {error}
      </div>
    );
  }
  return (
    <>
      <div className="text-2xl max-w-6xl mx-auto w-[90%]">
        Choose the category:
      </div>
      <div className="flex flex-wrap p-10 justify-center max-w-6xl mx-auto w-[90%] gap-10 mt-20">
        {data?.map((e) => (
          <div
            key={e.idCategory}
            className="shadow-xl p-5 flex flex-col max-w-[300px] h-100 relative rounded"
          >
            <Link to={`/meal/${e.strCategory}`}>
              <img
                src={e.strCategoryThumb}
                alt=""
                className="max-w-[300px] w-[90%] hover:scale-120 transition"
              />
            </Link>
            <p className="text-3xl w-[90%] mt-5">{e.strCategory}</p>
            <p className="text-gray-700 max-w-[90%]">
              {e.strCategoryDescription.length >= 15
                ? e.strCategoryDescription.split(" ").slice(0, 10).join(" ") +
                  "..."
                : e.strCategoryDescription}
            </p>
            <Link to={`/meal/${e.strCategory}`}>
              <button className="bg-yellow-300 w-[50%] mx-auto rounded p-1 absolute top-[85%] left-[25%] hover:bg-yellow-500 hover:text-white transition hover:translate-y-[-5px] hover:scale-110">
                {e.strCategory}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
