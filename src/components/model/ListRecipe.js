import React, { Component } from "react";
import RecipeItem from "./RecipeItem";
import "./ListRecipe.css";
function ListRecipe(props) {

  return (
    <div className="recipes">
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <h2>{props.query}</h2>
      <div className="recipes__container">
        <div className="recipes__wrapper">
          <ul className="recipes__items">
            {
              props.recipes.map(
                (recipe) => (
                  // (recipe.id > 0)?
                  <RecipeItem
                    key={recipe.id}
                    id={recipe.id}
                    // path={`/recipe/${recipe.id}`}
                    urlImage={recipe.urlImage}
                    calo={`${recipe.calo} Kcal`}
                    name={recipe.name}
                    recipe={recipe}
                  />
                )
                // : null
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ListRecipe;
