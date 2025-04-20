import React from 'react';
import { Card,CardHeader,CardContent,Typography,List,ListItem,ListItemText } from '@mui/material';

const Recipe = ({ name, ingredients, instructions }) => {
  return (
    <Card sx={{ maxWidth: 500, margin: 2 }}>
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="h6">Ingredients:</Typography>
        <List dense>
          {ingredients.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" sx={{ mt: 2 }}>Instructions:</Typography>
        <ol style={{ paddingLeft: 20 }}>
          {instructions.map((step, index) => (
            <li key={index}>
              <Typography variant="body2">{step}</Typography>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default Recipe;




// import React from 'react';

// const Recipe = ({ name, ingredients, instructions }) => {
//   return (
//     <div>
//       <h3>{name}</h3>


//       <h4>Ingredients:</h4>
//       <ul>
//         {ingredients.map((ingredient, index) => (
//           <li key={index}>{ingredient}</li>
//         ))}
//       </ul>

//       <h4>Instructions:</h4>
//       <ol>
//         {instructions.map((step, index) => (
//           <li key={index}>{step}</li>
//         ))}
//       </ol>
//     </div>
//   );
// };


// export default Recipe;