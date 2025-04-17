import React from 'react';
import Recipe from './Recipe';


const RecipeContainer = ({ recipes }) => {
  return (
    <div style={styles.recipeCard}>
      <h2>Recipe List</h2>
      {recipes.map((recipe, index) => (
        <Recipe key={index} {...recipe} />
      ))}
    </div>
  );
};


const styles = {
    recipeCard: {
      border: "1px solid #ddd",
      padding: "20px",
      marginBottom: "20px",
      borderRadius: "8px",
      textAlign: "left",
    },
  };


export default RecipeContainer;