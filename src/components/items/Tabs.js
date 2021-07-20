import React, { useState } from "react";
import "./Tabs.css";
import { ingredients } from "../../data/ingredients_data";
import ListIngredient from "./ingredient/ListIngredient.js";
//  cate: "Fruit", "Others", "Grain, Nut", "Veg", "Pasta", "Egg, Milk", "Meat, Fish"

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [tempList, setTempList] = useState([]);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const ListFruit = ingredients.filter((ingredient) => {
    return ingredient.cate.toLowerCase().includes('fruit'.toLowerCase());
  })

  function getList(cate) {
    setTempList(
      ingredients.filter((ingredient) => {
        return ingredient.cate.toLowerCase().includes(cate.toLowerCase());
      })
    );
  }


  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => {
            toggleTab(1);
            getList("Fruit");
          }}
        >
          Fruit
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => {
            toggleTab(2);
            getList("Meat, Fish");
          }}
        >
          Meat, Fish
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => {
            toggleTab(3);
            getList("Veg");
          }}
        >
          Vegetable
        </div>
        <div
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => {
            toggleTab(4);
            getList("Egg, Milk");
          }}
        >
          Egg, Milk
        </div>
        <div
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => {
            toggleTab(5);
            getList("Pasta");
          }}
        >
          Pasta
        </div>
        <div
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => {
            toggleTab(6);
            getList("Grain, Nut");
          }}
        >
          Grain, Nut
        </div>
        <div
          className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
          onClick={() => {
            toggleTab(7);
            getList("Others");
          }}
        >
          Others
        </div>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <ListIngredient ingredients={ListFruit} />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <ListIngredient ingredients={tempList} />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <ListIngredient ingredients={tempList} />
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <ListIngredient ingredients={tempList} />
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <ListIngredient ingredients={tempList} />
        </div>

        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <ListIngredient ingredients={tempList} />
        </div>

        <div
          className={toggleState === 7 ? "content  active-content" : "content"}
        >
          <ListIngredient ingredients={tempList} />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
