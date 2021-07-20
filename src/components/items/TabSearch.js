import React, { useState } from "react";
import "./Tabs.css";
import "./TabSearch.css";
import { ingredients } from "../../data/ingredients_data";
import ListIngredient from "./ingredient/ListIngredient.js";
import ListRecipe from "./ListRecipe";
//  cate: "Fruit", "Others", "Grain, Nut", "Veg", "Pasta", "Egg, Milk", "Meat, Fish"

function TabSearch(props) {
  const [toggleState, setToggleState] = useState(1);
  //   const [tempList, setTempList] = useState([]);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  //   const ListFruit = ingredients.filter((ingredient) => {
  //     return ingredient.cate.toLowerCase().includes('fruit'.toLowerCase());
  //   })

  //   function getList(cate) {
  //     setTempList(
  //       ingredients.filter((ingredient) => {
  //         return ingredient.cate.toLowerCase().includes(cate.toLowerCase());
  //       })
  //     );
  //   }

  return (
    <div className="container">
      <div className="bloc-tabs">
        <div className="tab1">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => {
              toggleTab(1);
              // setTempList(props.listIngredient)
            }}
          >
            Ingredient
          </button>
        </div>
        <div className="tab2">
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => {
              toggleTab(2);
              // setTempList(props.listRecipe)
            }}
          >
            Recipe
          </button>
        </div>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {props.listIngredient.length > 0 ? (
            <ListIngredient ingredients={props.listIngredient} />
          ) : (
            <h2 className="No-result">No ingredient can find</h2>
          )}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {props.listRecipe.length > 0 ? (
            <ListRecipe recipes={props.listRecipe} />
          ) : (
            <h2 className="No-result">No recipe can find</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabSearch;
