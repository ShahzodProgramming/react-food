import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import check from "../assets/images/check.svg";

export const Recipe = ({ handleAdd, cart, handleRemove }) => {
  const { recipeID } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals?.[0]));
  }, [recipeID]);

  useEffect(() => {
    if (!recipe) return;
    const list = [];
    for (let i = 1; i <= 20; i++) {
      const ing = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ing) list.push(`${measure || ""} ${ing}`.trim());
    }
    setIngredients(list);
  }, [recipe]);

  const getYoutubeId = (url) => url?.split("v=")[1]?.substring(0, 11);

  return (
    <div className="max-w-6xl mx-auto p-4 text-center">
      {recipe && (
        <>
          <h1 className="text-4xl">{recipe.strMeal}</h1>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="mx-auto w-[90%] max-w-lg rounded mt-5"
          />

          <div className="max-w-lg mx-auto mt-8 text-left">
            <p className="font-semibold mb-2">Ingredients:</p>
            {ingredients.map((e, i) => (
              <div
                key={i}
                className="border-b py-1 hover:bg-gray-100 transition px-2 pt-5"
              >
                {e}
              </div>
            ))}
          </div>

          <div className="max-w-lg mx-auto my-8">
            {cart.some((e) => e.idMeal === recipe.idMeal) ? (
              <button
                className="flex items-center justify-center w-full bg-green-100 p-3 rounded hover:bg-green-200"
                onClick={() => handleRemove(recipe.idMeal)}
              >
                <span>
                  Ordered <br />
                  <span className="text-xs text-red-500 font-bold">
                    Click again to cancel
                  </span>
                </span>
                <img src={check} className="ml-2" />
              </button>
            ) : (
              <button
                className="w-full bg-orange-400 text-white p-3 rounded hover:bg-orange-500"
                onClick={() => handleAdd(recipe)}
              >
                Add to Cart
              </button>
            )}
          </div>

          {getYoutubeId(recipe.strYoutube) && (
            <div className="max-w-lg mx-auto my-10">
              <p>You can watch the video:</p>
              <iframe
                className="w-full mt-3 aspect-video"
                src={`https://www.youtube.com/embed/${getYoutubeId(
                  recipe.strYoutube
                )}`}
                title="Recipe video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </>
      )}
    </div>
  );
};
