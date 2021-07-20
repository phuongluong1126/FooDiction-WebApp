import React, { useState, useEffect } from "react";
import { recipes } from "../data/recipes_data.js";
import ListRecipe from "../components/items/ListRecipe.js";
import "./Recipe.css";

function Recipe() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tempList, setTempList] = useState(recipes);
  const [vegan, setVegan] = useState(false);
  const [lowcarb, setLowcarb] = useState(false);
  const [lowfat, setLowfat] = useState(false);
  const [HCG, setHCG] = useState(false);
  const [fillter, setfillter] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    setTempList(
      recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
    if (searchTerm.length == 0) setTempList(recipes);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.length == 0) {
      var listFillter = [];
      if (vegan === true) {
        listFillter.push("Vegan");
      }
      if (lowcarb === true) {
        listFillter.push("Low-Carb");
      }
      if (lowfat === true) {
        listFillter.push("Low-Fat");
      }
      if (HCG === true) {
        listFillter.push("HCG");
      }
      console.log(listFillter);
      setTempList(recipes);
      if (listFillter.length > 0) {
        var temRecipe = [];
        for (var j = 0; j < recipes.length; j++) {
          var count = 0;
          for (var i = 0; i < listFillter.length; i++) {
            var check = false;
            for (var k = 0; k < recipes[j].list_cate.length; k++) {
              if (listFillter[i] === recipes[j].list_cate[k]) check = true;
            }
            if (check === true) {
              count++;
            }
          }
          if (count === listFillter.length) {
            temRecipe.push(recipes[j]);
          }
        }
        setTempList(temRecipe);
        console.log("temprecipe", temRecipe);
        console.log("templist", tempList);
      }
    } else {
      var listFillter = [];
      console.log(searchTerm);
      var listSearch = recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      console.log("temlistnow", listSearch);
      if (vegan === true) {
        listFillter.push("Vegan");
      }
      if (lowcarb === true) {
        listFillter.push("Low-Carb");
      }
      if (lowfat === true) {
        listFillter.push("Low-Fat");
      }
      if (HCG === true) {
        listFillter.push("HCG");
      }
      console.log(listFillter);
      var temRecipe = [];
      for (var j = 0; j < listSearch.length; j++) {
        var count = 0;
        for (var i = 0; i < listFillter.length; i++) {
          var check = false;
          for (var k = 0; k < listSearch[j].list_cate.length; k++) {
            if (listFillter[i] === listSearch[j].list_cate[k]) check = true;
          }
          if (check === true) {
            count++;
          }
        }
        if (count === listFillter.length) {
          temRecipe.push(listSearch[j]);
        }
      }
      setTempList(temRecipe);
      console.log("temprecipe", temRecipe);
      console.log("templist", tempList);
    }
  }, [fillter]);

  return (
    <div className="page">
      <h1 className="heading" data-aos="fade-up">
        What <span>recipe</span> you want to <span>explore</span>?
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
      <div className="Fillter">
        <div
          className={`btn-fillter${vegan ? "-active" : ""}`}
          onClick={() => {
            setVegan(!vegan);
            setfillter(!fillter);
          }}
        >
          Vegan
        </div>
        <div
          className={`btn-fillter${lowcarb ? "-active" : ""}`}
          onClick={() => {
            setLowcarb(!lowcarb);
            setfillter(!fillter);
          }}
        >
          Low-Carb
        </div>
        <div
          className={`btn-fillter${lowfat ? "-active" : ""}`}
          onClick={() => {
            setLowfat(!lowfat);
            setfillter(!fillter);
          }}
        >
          Low-Fat
        </div>
        <div
          className={`btn-fillter${HCG ? "-active" : ""}`}
          onClick={() => {
            setHCG(!HCG);
            setfillter(!fillter);
          }}
        >
          HCG
        </div>
      </div>

      <ListRecipe recipes={tempList} />
    </div>
  );
}
export default Recipe;
