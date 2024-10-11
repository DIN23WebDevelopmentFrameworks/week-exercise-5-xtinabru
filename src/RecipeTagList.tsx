import React from 'react';
import { IRecipeTagListProps } from './myTypes';
import RecipeTag from './RecipeTag';



function RecipeTagList({ tagList, onSelectTag }: IRecipeTagListProps) {
  return (
    <div className='tag'>
      {tagList.map(tag => (
        <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
      ))}
    </div>
  );
}

export default RecipeTagList;
