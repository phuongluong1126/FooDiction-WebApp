import React, { useState } from "react";
import "./TabTopic.css";
import { ingredients } from "../../data/ingredients_data";
import {recipes} from "../../data/recipes_data";
import ListIngredient from "./ingredient/ListIngredient.js";
import ListRecipe from "./ListRecipe.js";
//  cate: "Fruit", "Others", "Grain, Nut", "Veg", "Pasta", "Egg, Milk", "Meat, Fish"

function TabTopic() {
  const [toggleState, setToggleState] = useState(1);
  const [tempList, setTempList] = useState([]);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const ListRecipe1= recipes.filter((recipe) => {
    return (recipe.id > 9 && recipe.id <16);
  })
  const ListRecipe2= recipes.filter((recipe) => {
    return (recipe.id > 13 && recipe.id <20);
  })
  const ListRecipe3= recipes.filter((recipe) => {
    return (recipe.id > 2 && recipe.id <9);
  })
  const ListRecipe4= recipes.filter((recipe) => {
    return (recipe.id > 5 && recipe.id <12);
  })
  const ListRecipe5= recipes.filter((recipe) => {
    return (recipe.id > 9 && recipe.id <16);
  })
  const ListRecipe6= recipes.filter((recipe) => {
    return (recipe.id > 1 && recipe.id <8);
  })
  const ListIngredient2= ingredients.filter((ingredient) => {
    return (ingredient.id > 16 && ingredient.id <25);
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
      <div className="bloc-tabs-topic">
        <div
          className={toggleState === 1 ? "tabs-topic active-tabs-topic" : "tabs-topic"}
          onClick={() => {
            toggleTab(1);
          }}
        >
            <i class="fab icon-tab fa-hotjar"></i>
            <div>
            Trending
            </div>
        </div>
        <div
          className={toggleState === 2 ? "tabs-topic active-tabs-topic" : "tabs-topic"}
          onClick={() => {
            toggleTab(2);
          }}
        >
            <i class="fas icon-tab fa-tachometer-alt"></i>
            <div>
            Less Time
            </div>
        </div>
        <div
          className={toggleState === 3 ? "tabs-topic active-tabs-topic" : "tabs-topic"}
          onClick={() => {
            toggleTab(3);
            getList('Veg')
          }}
        >
            <i class="fas icon-tab fa-seedling"></i>
            <div>
            Green
            </div>
        </div>
        <div
          className={toggleState === 4 ? "tabs-topic active-tabs-topic" : "tabs-topic"}
          onClick={() => {
            toggleTab(4);
          }}
        >
            <i class="fas icon-tab fa-comment-dollar"></i>
            <div>
            Cheap
            </div>
        </div>
        <div
          className={toggleState === 5 ? "tabs-topic active-tabs-topic" : "tabs-topic"}
          onClick={() => {
            toggleTab(5);
          }}
        >
            <i class="fas icon-tab fa-smile-wink"></i>
            <div>
            Easy
            </div>
        </div>
        <div
          className={toggleState === 6 ? "tabs-topic active-tabs-topic" : "tabs-topic"}
          onClick={() => {
            toggleTab(6);
          }}
        >
            <i class="fab icon-tab fa-gratipay"></i>
            <div>
            Valentine
            </div>
        </div>
        <div
          className={toggleState === 7 ? "tabs-topic active-tabs-topic" : "tabs-topic"}
          onClick={() => {
            toggleTab(7);
          }}
        >
            <i class="fas icon-tab fa-birthday-cake"></i>
            <div>
            Birth Day
            </div>
        </div>
        <div
          className={toggleState === 8 ? "tabs-topic active-tabs-topic" : "tabs-topic"}
          onClick={() => {
            toggleTab(8);
          }}
        >
            <i class="fas icon-tab fa-ellipsis-h"></i>
            <div>
            More
            </div>
        </div>
      </div>
      <div className="content-tabs-topic">
      <div className="explore-more">
    Explore more
    <i class="fas fa-angle-double-right"></i>
</div>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <ListRecipe recipes={ListRecipe1} />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <ListRecipe recipes={ListRecipe2} />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <ListIngredient ingredients={tempList} />
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <ListIngredient ingredients={ListIngredient2} />
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <ListRecipe recipes={ListRecipe3} />
        </div>

        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <ListRecipe recipes={ListRecipe4} />
        </div>

        <div
          className={toggleState === 7 ? "content  active-content" : "content"}
        >
          <ListRecipe recipes={ListRecipe5} />
        </div>

        <div
          className={toggleState === 8 ? "content  active-content" : "content"}
        >
          <ListRecipe recipes={ListRecipe6} />
        </div>
      </div>
    </div>
  );
}

export default TabTopic;
