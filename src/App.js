import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";

const initialRecipes = [
  {
    id: "9e7f0d61-aa6b-418a-b56a-6418d19e6e1d",
    name: "Pizza",
    calories: 400,
    image: "https://i.imgur.com/eTmWoAN.png",
    servings: 1
  },
  {
    id: "37e0b31d-63f4-4d42-9f4b-e9a0fc464d60",
    name: "Salad",
    calories: 150,
    image: "https://i.imgur.com/DupGBz5.jpg",
    servings: 1
  },
  {
    id: "b5eb5b5f-41b8-4f1f-8844-7a1a56a17df7",
    name: "Sweet Potato",
    calories: 120,
    image: "https://i.imgur.com/hGraGyR.jpg",
    servings: 1
  },
  {
    id: "6c0f6f33-8c50-403d-9d1c-6ac9d8b77f29",
    name: "Gnocchi",
    calories: 500,
    image: "https://i.imgur.com/93ekwW0.jpg",
    servings: 1
  },
  {
    id: "f4b4d2bc-ff12-4f3f-b3b3-19d2f1682401",
    name: "Pot Roast",
    calories: 350,
    image: "https://i.imgur.com/WCzJDWz.jpg",
    servings: 1
  },
  {
    id: "bf89c1db-5c5b-4262-9d1e-8a68f88c61d5",
    name: "Lasagna",
    calories: 750,
    image: "https://i.imgur.com/ClxOafl.jpg",
    servings: 1
  }
];

function App() {
  const [recipes, setRecipes] = useState(initialRecipes);

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  return (
    <div className="App">
      <h1>Recipe Book</h1>
      <RecipeForm onAddRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
