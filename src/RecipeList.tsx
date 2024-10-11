import React from 'react';
import { IRecipeListProps } from './myTypes';
import Recipe from './Recipe';

function RecipeList({ recipes }: IRecipeListProps) {
  return (
    <div className="tag-list">
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipeData={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;