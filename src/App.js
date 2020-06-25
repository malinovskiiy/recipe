import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Spinner from "./Spinner";

const App = () => {
  // Api keys
  let config = {
    APP_ID: "85914f4d",
    APP_KEY: "6a9555d59910c034ab812cfac63c65e0",
  };

  // Set default value
  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("chicken");

  // Call getRecipes() once
  useEffect(() => {
    getRecipes();
  }, [query]);

  // Fetch recipes
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${config.APP_ID}&app_key=${config.APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setLoading(false);
  };

  // Sets search param to input value
  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  // Handles search button click
  const getSearch = (event) => {
    event.preventDefault();
    if(search){
      setQuery(search);
    } else {
      alert('Please enter recipe')
    }
    
  };

  return (
    <div className="container pt-5">
      <form className="search-form" onSubmit={getSearch}>
        <h1 className="text-white text-center text-italic">
          Search recipe app
        </h1>
        <div className="row mt-3">
          <div className="col-10">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="What you want to eat..."
              value={search}
              onChange={updateSearch}
            />
          </div>
          <div className="col-2 text-right">
            <button type="submit" className="btn btn-success">
              Search recipe
            </button>
          </div>
        </div>
      </form>

      {loading && <Spinner />}

      <div className="row pt-4">
        {recipes ? (
          recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
              image={recipe.recipe.image}
              url={recipe.recipe.url}
            />
          ))
        ) : (
          <p>No items</p>
        )}
      </div>
    </div>
  );
};

export default App;
