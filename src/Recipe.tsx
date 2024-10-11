import React from 'react';
import { IRecipeProps } from './myTypes';

function Recipe({ recipeData }: IRecipeProps) {
  return (
    <div className="recipe">
      <h2>{recipeData.name}</h2>
      <img src={recipeData.image} alt={recipeData.name} />
      <h3>Ingredients:</h3>
      <ul>
        {recipeData.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipeData.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p>Prep Time: {recipeData.prepTimeMinutes} minutes</p>
      <p>Cook Time: {recipeData.cookTimeMinutes} minutes</p>
      <p>Servings: {recipeData.servings}</p>
      <p>Difficulty: {recipeData.difficulty}</p>
      <p>Cuisine: {recipeData.cuisine}</p>
      <p>Calories per Serving: {recipeData.caloriesPerServing}</p>
      <p>Rating: {recipeData.rating} ({recipeData.reviewCount} reviews)</p>
    </div>
  );
}

export default Recipe;