
import React from 'react';
import { Link } from 'react-router-dom';
import "./RecipeItem.css";

function RecipeItem(props) {
  return (
    <>
      <li className='recipes__item'>
        <Link className='recipes__item__link' to= {`/recipe/${props.id}`}>
          <figure className='recipes__item__pic-wrap' data-category= {props.calo}>
            <img
              className='recipes__item__img'
              alt='Recipe Image'
              src={props.urlImage}
            />
          </figure>
          <div className='recipes__item__info'>
            <h5 className='recipes__item__text'>{props.name}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default RecipeItem;