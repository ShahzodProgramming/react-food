import React from "react";
import { Route, Routes } from "react-router-dom";
import { Categories } from "./components/categories";
import { MealCategory } from "./pages/MealCategory";
import { Recipe } from "./pages/Recipe";
import Navbar from "./components/Navbar";

export const Approutes = ({ data }) => {
  const categories = data?.categories || [];
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Categories data={categories} />} />
        <Route path="meal/:category" element={<MealCategory />} />
        <Route path="recipe/:recipeID" element={<Recipe />} />
      </Routes>
    </div>
  );
};
