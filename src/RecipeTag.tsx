import React from 'react';
import { IRecipeTagProps } from './myTypes';


function RecipeTag({ tagName, onSelectTag }: IRecipeTagProps) {
  return (
    <div className="tag" onClick={() => onSelectTag(tagName)} style={{ cursor: 'pointer' }}>
      {tagName}
    </div>
  );
}

export default RecipeTag;