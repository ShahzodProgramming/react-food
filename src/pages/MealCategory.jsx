import React, { useEffect, useState } from "react";
import { data, Link, useParams } from "react-router-dom";
import MyLoader from "../components/ReactSkeleton";
import check from "../assets/images/check.svg";

export const MealCategory = ({ handleAdd, handleRemove, cart }) => {
  const { category } = useParams();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const categor_edit =
    String(category).charAt(0).toUpperCase() + String(category).slice(1);

  // UseEffect bu bir marta ishlaydigan funksiyamiz.
  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchData = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categor_edit}`
        );
        const dataJson = await fetchData.json();
        setCategories(dataJson.meals);
      } catch (err) {
        console.error("Error my friend: " + err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, []);

  if (loading) {
    return (
      <>
        <MyLoader />
        <MyLoader />
        <MyLoader />
        <MyLoader />
      </>
    );
  }
  if (error) {
    return (
      <p className="text-6xl text-red-400">
        Sorry but an error occured: {error}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap p-10 justify-center max-w-6xl mx-auto w-[90%] gap-10 mt-20 md:mt-0">
      {categories?.map((e) => (
        <div
          key={e.idMeal}
          className="shadow-xl p-5 flex flex-col max-w-[300px]  relative rounded"
        >
          <img
            src={e.strMealThumb}
            className="max-w-[300px] w-[90%] hover:scale-120 transition rounded-xl mx-auto"
          />
          <p className="text-2xl w-[90%] mt-10">{e.strMeal}</p>

          <Link to={`/recipe/${e.idMeal}`} className="w-[90%] mx-auto mt-10">
            <button className="bg-yellow-300 w-full mx-auto rounded p-3 hover:bg-yellow-500 hover:text-white transition hover:translate-y-[-5px] hover:scale-110">
              Watch the recipe
            </button>
          </Link>

          <div className="btn mt-5 w-full">
            {cart?.some((e1) => e1.idMeal === e.idMeal) ? (
              <p
                className="flex items-center inset-ring-2 rounded justify-evenly p-3 h-15 bg-green-100"
                onClick={() => handleRemove(e.idMeal)}
              >
                <img src={check} className="max-w-3xs w-[25%]" />
                <span className="text-xs text-red-600 font-bold w-[75%]">
                  Press again to cancel
                </span>
              </p>
            ) : (
              <button
                className="text-center w-full bg-orange-400 p-2 px-5 h-15 text-white rounded hover:bg-transparent hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition"
                onClick={() => handleAdd(e)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
