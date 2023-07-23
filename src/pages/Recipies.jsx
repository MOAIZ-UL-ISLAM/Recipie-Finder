import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getresults } from "../components/Services/api";

const Recipies = () => {
  const [querysearch, setquerysearch] = useState("pizza");
  const [recipes, setrecipes] = useState([]);

  useEffect(() => {
    getqueryresults(querysearch);
  }, [querysearch]);
  const getqueryresults = async () => {
    let result = await getresults(querysearch);
    if (result && result.recipes) {
      setrecipes(result.recipes);
    }
  };
  return (
    <div>
      <Search setquerysearch={setquerysearch} />
      <RecipeList recipes={recipes} querysearch={querysearch} />
    </div>
  );
};

export default Recipies;
