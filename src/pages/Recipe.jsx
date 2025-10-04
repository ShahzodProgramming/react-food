import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import check from "../assets/images/check.svg";

export const Recipe = ({ handleAdd, cart, handleRemove }) => {
  const [recipe, setRecipe] = useState([]);
  const { recipeID } = useParams();
  useEffect(() => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`)
        .then((res) => res.json())
        .then((res) => setRecipe(res.meals[0]));
    } catch (err) {
      console.log("An error occured: " + err);
    }
  }, []);

  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    if (!recipe) {
      setIngredient([]);
      return;
    }

    const result = [];

    // There are up to 20 possible ingredients in TheMealDB
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        // Combine them in one string
        result.push(`${measure ? measure.trim() : ""} ${ingredient?.trim()}`);
      }
    }

    setIngredient(result);
  }, [recipe]);

  return (
    <div className="max-w-6xl mx-auto">
      <p className="text-4xl text-center">{recipe.strMeal}</p>
      <img
        src={recipe.strMealThumb}
        className="mx-auto max-w-lg w-[90%] rounded mt-5"
      />

      <div className="flex flex-col max-w-lg mx-auto mt-10">
        <p>The recipe:</p>
        <div className="flex flex-col ml-5">
          {ingredient?.map((e, i) => (
            <div
              className="border-b-4 border-gray-200 px-2 py-2 hover:bg-gray-200 transition"
              key={i}
            >
              {e}
            </div>
          ))}
        </div>
      </div>

      <div className="btn max-w-lg mx-auto my-10">
        {cart.some((e) => e.idMeal === recipe.idMeal) ? (
          <p
            className="flex items-center inset-ring-2 rounded justify-evenly p-3 h-15 bg-green-100"
            onClick={() => handleRemove(recipe.idMeal)}
          >
            <span className="wrapper flex flex-col">
              Your order was successfull
              <span className="text-xs text-red-600 font-bold">Press again to cancel</span>
            </span>
            <img src={check} className="" />
          </p>
        ) : (
          <button
            className="w-full text-center bg-orange-400 p-2 px-5 h-15 text-white rounded hover:bg-transparent hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition"
            onClick={() => handleAdd(recipe)}
          >
            Add to Cart
          </button>
        )}
      </div>

      <div className="max-w-lg mx-auto my-15">
        <p>You can watch the Youtube video if you want:</p>
        <iframe
          className="w-full h-50 mt-5"
          src={recipe.strYoutube}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
