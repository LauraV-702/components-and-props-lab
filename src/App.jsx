import RecipeContainer from "./RecipeContainer";
import { recipes } from "../data.js";


function App() {
  return (
    <div>
      <h1>My Recipe App</h1>
      <RecipeContainer recipes={recipes} />
    </div>
  );
}



export default App;
