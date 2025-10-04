import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  console.log(recipe);
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

  console.log(ingredient);
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
          {ingredient?.map((e) => (
            <div className="border-b-4 border-gray-200 px-2 py-2 hover:bg-gray-200 transition">
              {e}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-lg mx-auto my-15">
        <p>You can watch the Youtube video if you want:</p>
        <iframe
            className="w-full h-50 mt-5"
          src={recipe.strYoutube}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
