import React from "react";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={image} className="card-img" alt="" />
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <ol>
              {ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>
              ))}
          </ol>
          <div className="d-flex justify-content-center align-items-center">
            <div className="btn-group">
              <button disabled className="btn btn-sm btn-dark text-white">
                {Math.round(calories * 100) / 100} calories
              </button>
              <a href={url} className="btn btn-sm btn-info">
                Try this recipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
