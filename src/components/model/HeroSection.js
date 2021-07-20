import React from 'react';
import { Button } from '../model/Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import intro from "../../assets/video/intro.mp4";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src= {intro} autoPlay loop muted />
      <h1>FOOD DICTIONARY</h1>
      {/* <p>What are you waiting for?</p> */}
      <Link to='/explore' className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline2'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </Link>
    </div>
  );
}

export default HeroSection;
