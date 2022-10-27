import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {CategoryRecipes} from "./pages/CategoryRecipes";
import {Navigation} from "./components/Navigation";
import {Recipe} from "./pages/Recipe";

import './App.css'


function App() {
  return (
      <>
          <Navigation />
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/recipe/:recipeID" element={<Recipe />}/>
              <Route path={"/recipes-from-category/:categoryName"} element={<CategoryRecipes />} />
          </Routes>
      </>
  );
}

export default App;
