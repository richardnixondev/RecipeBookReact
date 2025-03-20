import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>Calories: {recipe.calories}</p>
      <p>Servings: {recipe.servings}</p>
    </div>
  );
}

export default RecipeCard;
