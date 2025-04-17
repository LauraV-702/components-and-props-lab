import React from 'react';
import Recipe from './Recipe';


const RecipeContainer = ({ recipes }) => {
  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe, index) => (
        <Recipe key={index} {...recipe} />
      ))}
    </div>
  );
};


export default RecipeContainer;