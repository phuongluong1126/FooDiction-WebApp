import React, { useState, useEffect } from "react";
import { ingredients } from "../data/ingredients_data.js";
import { recipes } from "../data/recipes_data.js";
// import { temp } from "../data/ingredients_data.js";
import { Link } from "react-router-dom";
import "../components/items/ingredient/IngredientItem2.css";
import "../components/items/ingredient/ListIngredient2.css";
import { Button } from "../components/layout/Button";
import ListRecipe from "../components/items/ListRecipe.js";
import "./CookNow.css";

function Cook() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tempList, setTempList] = useState(ingredients);
  const [tempList2, setTempList2] = useState([]);
  const [tempChooseList, setTempChooseList] = useState([]);
  const [suggestList, setSuggestList] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    setTempList(
      ingredients.filter((ingredient) => {
        return (
          ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !tempChooseList.includes(ingredient)
        );
      })
    );

  }, [searchTerm]);

  useEffect(() => {
    if (tempList.length>7) {
      setTempList2([tempList[0], tempList[1], tempList[2], tempList[3], tempList[4], tempList[5]])
    } else {
      setTempList2(tempList)
    }
    if (tempList2.length ==0)  setSuggestList([]);
  }, [tempList])

  function handleSearch(list) {
    var temp = [];
    if (list.length > 0) {
      // for (var i = 0; i < list.length; i++) {
      //   for (var j = 0; j < recipes.length; j++) {
      //     for (var k = 0; k < recipes[j].recipes.length; k++) {
      //       if (list[i].name == recipes[j].recipes[k].name) {
      //         var flat = 0;
      //         for (var check = 0; check < temp.length; check++) {
      //           if (recipes[j].name == temp[check].name) {
      //             flat = 1;
      //           }
      //         }
      for (var j = 0; j < recipes.length; j++) {
        var count = 0;
        for (var i = 0; i < list.length; i++) {
          var check = false;
          for (var k = 0; k < recipes[j].recipes.length; k++) {
            if (list[i].name === recipes[j].recipes[k].name) check = true;
          }
          if (check === true) {
            count++;
          }
        }
              if (count===list.length) {
                temp.push(recipes[j]);
              }
            }
          // }
        // }
      // }
    } else {
      temp = [];
    }
    if (temp.length > 0) {
      setSuggestList(temp);
    } else setSuggestList([])
  }
  return (
    <div className = "page">
      {/* <h1 className="heading2" data-aos="fade-up">
        What <span>ingredients</span> you have <span>current</span>?
      </h1> */}

      <div className="search_wrap search_wrap_5">
        <div className="search_box">
          <input
            type="text"
            className="input"
            placeholder="What ingredient you have now?"
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

      <div className="search-view">
        <div className="ingredients">
          <div className="ingredients__container">
            <div className="ingredients__wrapper">
              <ul className="ingredients__items">
                {tempList2.map((ingredient) => (
                  <li className="ingredients2__item">
                    <Link className="ingredients2__item__link">
                      <figure
                        className="ingredients2__item__pic-wrap"
                        data-category={`${ingredient.calo} Kcal`}
                        onClick={() => {
                          setTempChooseList([...tempChooseList, ingredient]);
                          setTempList(
                            tempList.filter((x) => {
                              return x.id !== ingredient.id;
                            })
                          );
                        }}
                      >
                        <img
                          className="ingredients2__item__img"
                          alt="Ingredient Image"
                          src={ingredient.urlImage}
                        />
                      </figure>
                      <div className="ingredients2__item__info">
                        <h5 className="ingredients2__item__text">
                          {ingredient.name}
                        </h5>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="view-under">
      <div className ="view-side1">
      <h1 className="heading3" data-aos="fade-up">
        <span>Your ingredient</span> here:
      </h1>

      <div className="ingredients">
        <div className="ingredients__container">
          <div className="ingredients__wrapper">
            <ul className="ingredients__items">
              {tempChooseList.map((ingredient) => (
                <li className="ingredients2__item">
                  <Link className="ingredients2__item__link">
                    <figure
                      className="ingredients2__item__pic-wrap"
                      data-category={`${ingredient.calo} Kcal`}
                      onClick={() => {
                        setTempList([...tempList, ingredient]);
                        setTempChooseList(
                          tempChooseList.filter((x) => {
                            return x.id !== ingredient.id;
                          })
                        );
                      }}
                    >
                      <img
                        className="ingredients2__item__img"
                        alt="Ingredient Image"
                        src={ingredient.urlImage}
                      />
                    </figure>
                    <div className="ingredients2__item__info">
                      <h5 className="ingredients2__item__text">
                        {ingredient.name}
                      </h5>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>

    <div className ="view-side2">
    <div className="cook-btn">
        <Button
          className="cook-btn"
          buttonStyle="btn--primary2"
          buttonSize="btn--large"
          onClick={() => handleSearch(tempChooseList)}
        >
          SUGGEST
        </Button>
      </div>
      <div className="list-recipe">
      <ListRecipe recipes={suggestList} />
      </div>
    </div> 

      </div>
     
    </div>
  );
}
export default Cook;
