import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ingredients } from "../../data/ingredients_data";
import ListIngredient from "../items/ingredient/ListIngredient";
import ListRecipe from "../items/ListRecipe";
import IngredientItem from "../items/ingredient/IngredientItem";

export default function Carousel(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(props.list);
  }, []);

  console.log(window.screen.width);
  return (
    <Container>
      <div className="clearfix mt-5 mb-2">
        <h4 className="float-left">Now Playing</h4>
        <Link className="float-right text-uppercase" to="/">
          see all
        </Link>
      </div>

      <Slider {...settings}>
        {/* (props.ingre===true)? */}
        {list.map((ingredient) => {
          if (ingredient.id < 6)
            return (
              <div>
                <IngredientItem
                  key={ingredient.id}
                  id={ingredient.id}
                  // path={`/ingredient/${ingredient.id}`}
                  urlImage={ingredient.urlImage}
                  calo={`${ingredient.calo} Kcal`}
                  name={ingredient.name}
                  ingredient={ingredient}
                />
              </div>
            );
          else return null;
        })}
        {/* :null */}
      </Slider>
    </Container>
  );
}
