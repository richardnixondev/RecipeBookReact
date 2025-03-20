import React, { useState } from "react";

function RecipeForm({ onAddRecipe }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Date.now().toString(),
      name,
      calories: parseInt(calories),
      servings: parseInt(servings),
      image: image ? URL.createObjectURL(image) : "",
    };

    onAddRecipe(newRecipe);
    setName("");
    setCalories("");
    setServings("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Servings"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;
