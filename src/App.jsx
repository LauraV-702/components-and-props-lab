import RecipeContainer from "./RecipeContainer";
import { recipes } from "../data.js";

function App() {
  return (
    <div style={styles.appContainer}>
      <h1>My Recipe App</h1>
      <RecipeContainer recipes={recipes} />
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",  
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  },
};

export default App;