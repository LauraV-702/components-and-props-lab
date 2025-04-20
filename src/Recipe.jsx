import React from 'react';
// Import Material UI components
import { Card,CardHeader,CardContent,Typography,List,ListItem,ListItemText } from '@mui/material';

// Presentational component for displaying recipe
const Recipe = ({ name, ingredients, instructions }) => {
  return (
    // Card component provides a visually appealing container
    <Card sx={{ maxWidth: 500, margin: 2 }}>
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="h6">Ingredients:</Typography>
        
        {/* List of ingredients */}
        <List dense>
          {ingredients.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={`• ${item}`} />
            </ListItem>
          ))}
        </List>

        {/* Section title for instructions */}
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
