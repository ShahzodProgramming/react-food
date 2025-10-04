import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const MealCategory = () => {
  const [categories, setCategories] = useState([]);

  const { category } = useParams();

  const categor_edit =
    String(category).charAt(0).toUpperCase() + String(category).slice(1);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categor_edit}`
    )
      .then((res) => res.json())
      .then((res) => setCategories(res?.meals));
  }, []);


  console.log(categories);
  return (
    <div className="flex flex-wrap p-10 justify-center max-w-6xl mx-auto w-[90%] gap-10">
      {categories?.map((e) => (
        <div
          key={e.idMeal}
          className="shadow-xl p-5 flex flex-col max-w-[300px] h-[500px] relative rounded"
        >
          <img
            src={e.strMealThumb}
            className="max-w-[300px] w-[90%] hover:scale-120 transition mb-10 rounded-xl mx-auto"
          />
          <p className="text-2xl w-[90%]">{e.strMeal}</p>


          <Link to={`/recipe/${e.idMeal}`} className="mt-10">
            <button className="bg-yellow-300 w-[50%] mx-auto rounded p-1 absolute top-[85%] left-[25%] hover:bg-yellow-500 hover:text-white transition hover:translate-y-[-5px] hover:scale-110">
              Watch the recipe
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
