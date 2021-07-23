import { recipes } from "../data/recipes_data.js";
import React, { useState, useEffect } from "react";
import ListRecipe from "../components/items/ListRecipe.js";
import "./DetailRecipe.css";

function DetailRecipe(props) {
  console.log(props.match.params.id);
  let recipe = recipes[props.match.params.id - 1];

  // const recipe = recipes.find(x => x._id === props.match.params.id);
  return (
    <div className="page">
      <div className="container">
        <div className="row-1">
          <div className="col-1a">
            <li className="recipes__item2">
              <div className="recipes__item__link2">
                <figure className="recipes__item__pic-wrap2">
                  <img
                    className="recipes__item__img2"
                    alt="Recipe Image"
                    src={recipe.urlImage}
                  />
                </figure>
                <h1 className="recipes__item__info2">{recipe.name}</h1>
              </div>
            </li>
          </div>
          <div class="col-1b nutri-table">
            {/* <h1 className="section-heading">Nutrition</h1> */}
            <table class="nutri-fact">
              <thead class="table-header">
                <tr>
                  <th className="name-table">Nutrition per: 100g</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Fat</td>
                  <td>0.3g</td>
                </tr>
                <tr>
                  <td>Cholesterol</td>
                  <td>0g</td>
                </tr>
                <tr>
                  <td>Sodium</td>
                  <td>6.2mg</td>
                </tr>
                <tr>
                  <td>Potassiumt</td>
                  <td>292mg</td>
                </tr>
                <tr>
                  <td>Total Carbonhydrad</td>
                  <td>4.8g</td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td>1.1g</td>
                </tr>
                <tr>
                  <td>Viatmin A</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>Vitamin C</td>
                  <td>0.9%</td>
                </tr>
                <tr>
                  <td>Vitamin D</td>
                  <td>0.5%</td>
                </tr>
                <tr>
                  <td>Calcium</td>
                  <td>0.9%</td>
                </tr>
                <tr>
                  <td>Iron</td>
                  <td>1.8%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row-2">
        <div className="col-2a">
        <div className="list-ingredient">
            <h1 className="section-heading">Ingredients</h1>
              <ul className="ingres">
                {recipe.recipes.map((beni) => (
                  <div className="ingre">
                    <div className="name-ingre">{`${beni.name} `}</div>
                    <div className="ingre-count">
                      {`${beni.name.length/2}`}
                    </div>
                    {/* {recipe.countIngre.filter((ingre) => (
                  <div>
                    <li className="beni3">{beni}</li>
                  </div>
                ))} */}
                  </div>
                ))}
              </ul>
              </div>
        </div>
          <div className="col-2b">
            <h1 className="section-heading">Instructions</h1>
            <ul className="health-beni">
              {recipe.instructions.map((beni) => (
                <div>
                  <li className="beni">{beni}</li>
                  {/* <p className="discription">
                    The amount of lycopene is higher in processed tomato foods
                    because processing involves removing water
                  </p> */}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <h1 className="section-heading2">Relate Recipes</h1> */}
    </div>
  );
}

export default DetailRecipe;
