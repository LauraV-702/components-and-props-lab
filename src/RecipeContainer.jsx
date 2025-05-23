import React from 'react';
// Import the presentational Recipe component
import RecipeCard from './Recipe.jsx';
// Import layout and typography components from Material UI
import { Box, Typography } from '@mui/material';

// RecipeContainer is a Higher-Order Component 
//that receives an array of recipes via props
const RecipeContainer = ({ recipes }) => {
  return (
    // Outer Box for padding around container
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>Recipe List</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Loop through the recipes array 
        and render a RecipeCard for each item */}
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            name={recipe.name}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RecipeContainer;
