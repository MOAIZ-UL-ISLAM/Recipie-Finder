import "./App.css";
import NavBar from "./components/commom/NavBar";
import Home from "../src/pages/Home";
import Recipies from "./pages/Recipies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipieDetails from "./components/RecipieDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipies" element={<Recipies />} />
        <Route path="/Recipes/:recipeId" element={<RecipieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
