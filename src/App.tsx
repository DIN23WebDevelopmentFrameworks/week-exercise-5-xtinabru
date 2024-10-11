import React, { useState, useEffect } from 'react';
import RecipeTagList from "./RecipeTagList";
import RecipeList from './RecipeList';
import { IRecipe } from './myTypes';
import './index.css'

const App = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
      .then(response => response.json())
      .then(data => {
        setTags(data);
      })
      .catch(error => {
        console.error("Something is wrong:", error);
      });
  }, []);

  function handleTagClick(tagName: string) {
    setSelectedTag(tagName);
    fetch(`https://dummyjson.com/recipes/tag/${tagName}`)
      .then(response => response.json())
      .then(data => {
        setRecipes(data.recipes); 
      })
      .catch(error => {
        console.error('Something is wrong:', error);
      });
  }

  function handleBack() {
    setSelectedTag(null);
  }

  let content;

  if (selectedTag) {
    content = (
      <div>
        <button onClick={handleBack}>Back to Tags</button>
        <RecipeList recipes={recipes} />
      </div>
    );
  } else {
    content = <RecipeTagList tagList={tags} onSelectTag={handleTagClick} />;
  }

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      <div>
        {content}
      </div>
    </div>
  );
};

export default App;
