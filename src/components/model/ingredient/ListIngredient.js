import React, { Component } from "react";
import IngredientItem from "./IngredientItem";
import "./ListIngredient.css";
function ListIngredient(props) {

  return (
    <div className="ingredients">
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <h2>{props.query}</h2>
      <div className="ingredients__container">
        <div className="ingredients__wrapper">
          <ul className="ingredients__items">
            {
              props.ingredients.map(
                (ingredient) => (
                  // (ingredient.id > 0)?
                  <IngredientItem
                    key={ingredient.id}
                    id={ingredient.id}
                    // path={`/ingredient/${ingredient.id}`}
                    urlImage={ingredient.urlImage}
                    calo={`${ingredient.calo} Kcal`}
                    name={ingredient.name}
                    ingredient={ingredient}
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
export default ListIngredient;
