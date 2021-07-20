
import React from 'react';
import { Link } from 'react-router-dom';
import "./IngredientItem.css";

function IngredientItem(props) {
  return (
    <>
      <li className='ingredients__item'>
        <Link className='ingredients__item__link' to= {`/ingredient/${props.id}`}>
          <figure className='ingredients__item__pic-wrap' data-category= {props.calo}>
            <img
              className='ingredients__item__img'
              alt='Ingredient Image'
              src={props.urlImage}
            />
          </figure>
          <div className='ingredients__item__info'>
            <h5 className='ingredients__item__text'>{props.name}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default IngredientItem;