import React from 'react';
import RecipeCard from './Recipe.jsx';
import { Box, Typography } from '@mui/material';

const RecipeContainer = ({ recipes }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>Recipe List</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </Box>
    </Box>
  );
};

export default RecipeContainer;



//OLD WAY BELOW:

// import React from 'react';
// import Recipe from './Recipe';


// const RecipeContainer = ({ recipes }) => {
//   return (
//     <div style={styles.recipeCard}>
//       <h2>Recipe List</h2>
//       {recipes.map((recipe, index) => (
//         <Recipe key={index} {...recipe} />
//       ))}
//     </div>
//   );
// };


// const styles = {
//     recipeCard: {
//       border: "1px solid #ddd",
//       padding: "20px",
//       marginBottom: "20px",
//       borderRadius: "8px",
//       textAlign: "left",
//     },
//   };


// export default RecipeContainer;