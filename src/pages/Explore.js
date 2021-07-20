import React, { useState, useEffect } from "react";
import { recipes } from "../data/recipes_data.js";
import ListRecipe from "../components/items/ListRecipe.js";
import "./Recipe.css";
import { ingredients } from "../data/ingredients_data.js";
import "./Explore.css";
import { Link } from "react-router-dom";
import TabSearch from "../components/items/TabSearch.js";

function Explore() {
  let trendingList = [recipes[1], recipes[2], recipes[6]];
  let happyMotherList = [recipes[8], recipes[9], recipes[10]];
  const [searchTerm, setSearchTerm] = useState("");
  const [listIngredient, setlistIngredient] = useState([]);
  //   const [wordEntered, setWordEntered] = useState("");
  const [listRecipe, setlistRecipe] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 0) {
      setlistRecipe(
        recipes.filter((recipe) => {
          return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
      setlistIngredient(
        ingredients.filter((ingredient) => {
          return ingredient.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        })
      );
    } else {
      setlistRecipe([]);
      setlistIngredient([]);
    }
  }, [searchTerm]);

  return (
    <div className="page">
      <h1 className="heading">
        <span>Explore</span> the world of <span>food</span>
      </h1>
      <div className="search-field">
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
            {(searchTerm.length>0)?
              <div
                onClick={() => {
                  setSearchTerm("");
                }}
                className="button"
              >
                <p>Clear</p>
              </div>: null
            }
          </div>
        </div>
      </div>

      {listIngredient.length === 0 && listRecipe.length === 0 ? (
        <div className="Field-Suggest">
          <div className="Trending-Section">
            <div className="row-title">
              <Link className="Title-list" to="/explore">
                Treding recipes
              </Link>
              {/* <button className="More">More</button> */}
            </div>
            <ListRecipe recipes={trendingList} />
          </div>

          <div className="HappyMother-Section">
            <div className="row-title">
              <Link className="Title-list" to="/explore">
                Happy Mother Day
              </Link>
              {/* <button className="More">More</button> */}
            </div>
            <ListRecipe recipes={happyMotherList} />
          </div>
        </div>
      ) : (
        <TabSearch listIngredient={listIngredient} listRecipe={listRecipe} />
      )}
    </div>
  );
}

export default Explore;
