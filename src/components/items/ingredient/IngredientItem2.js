import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./IngredientItem2.css";

function IngredientItem2(props) {
  const [choose, setChoose] = useState(props.choose)
  console.log('test',choose);
  // if (choose == false) {
  return (
    <>
      <li className="ingredients2__item">
        <div className="ingredients2__item__link">
          <figure
            className="ingredients2__item__pic-wrap"
            data-category={props.calo}
            onClick={() => {
              setChoose(!choose);
            }}
          >
            <img
              className="ingredients2__item__img"
              alt="Ingredient Image"
              src={props.urlImage}
            />
          </figure>
          <div className="ingredients2__item__info">
            <h5 className="ingredients2__item__text">{props.name}</h5>
          </div>
        </div>
      </li>
    </>
  )
} 
// else return null;
// }

export default IngredientItem2;
