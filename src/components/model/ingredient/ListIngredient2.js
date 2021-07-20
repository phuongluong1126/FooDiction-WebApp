import React, { Component } from "react";
import IngredientItem2 from "./IngredientItem2";
import "./ListIngredient2.css";
function ListIngredient(props) {

  return (
    <div className="ingredients">
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <div className="ingredients__container">
        <div className="ingredients__wrapper">
          <ul className="ingredients__items">
            {
              props.ingredients.map(
                (ingredient) => (
                  // (ingredient.choose == false)?
                  <IngredientItem2
                    key={ingredient.id}
                    id={ingredient.id}
                    urlImage={ingredient.urlImage}
                    calo={`${ingredient.calo} Kcal`}
                    name={ingredient.name}
                    choose = {ingredient.choose}
                    ingredient={ingredient}
                  /> 
                  // : null
                )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ListIngredient;
