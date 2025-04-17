import React from 'react';

const Recipe = ({ name, ingredients, instructions }) => {
  return (
    <div>
      <h3>{name}</h3>


      <h4>Ingredients:</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h4>Instructions:</h4>
      <ol>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};


export default Recipe;