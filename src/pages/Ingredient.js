import React, { useState, useEffect } from "react";
import { ingredients } from "../data/ingredients_data.js";
import ListIngredient from "../components/items/ingredient/ListIngredient";
import Tabs from "../components/items/Tabs.js";
import "./Ingredient.css";

function Ingredient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tempList, setTempList] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  var textSearch = "Search";
  // var isSearch = false;

  useEffect(() => {
    setTempList(
      ingredients.filter((ingredient) => {
        return ingredient.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
    textSearch = "Clear";
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.length === 0) setTempList(ingredients);
  }, [searchTerm]);

  if (searchTerm.length === 0) {
    return (
      <div className="ingredient-page">
        <h1 className="heading" data-aos="fade-up">
          What <span>ingredient</span> you want to <span>explore</span>?
        </h1>
        <div className="search_wrap search_wrap_5">
          <div className="search_box">
            <input
              type="text"
              className="input"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            {searchTerm.length > 0 ? (
              <div
                onClick={() => {
                  setSearchTerm("");
                }}
                className="button"
              >
                <p>Clear</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="tab-ingre" >
        <Tabs/>
        </div>
      </div>
    );
  } else {
  }
  return (
    <div className="ingredient-page">
      <h1 className="heading" data-aos="fade-up">
        What <span>ingredient</span> you want to <span>explore</span>?
      </h1>

      <div className="search_wrap search_wrap_5">
        <div className="search_box">
          <input
            type="text"
            className="input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          {searchTerm.length > 0 ? (
            <div
              onClick={() => {
                setSearchTerm("");
              }}
              className="button"
            >
              <p>Clear</p>
            </div>
          ) : null}
        </div>
      </div>
      {<ListIngredient ingredients={tempList} />}
    </div>
  );
}
export default Ingredient;
