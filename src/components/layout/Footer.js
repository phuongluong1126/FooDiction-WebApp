import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import rasberry from "../../images/rasberry.png";

function Footer() {
  return (
    <div className="footer-container Page">
      <p className="footer-subscription-heading">
        Food Dictionary - Explore the value of food
      </p>
      <section className="footer-subscription">
        {/* <p className='footer-subscription-text'>
        On FooDiction, you can easily explore all knowledge about the food like image, origin, nutrition, the food can be cooked,...
        </p> */}
        <div className="under-view">
        {/* <div className = "left-footer">
          <img
              className='rasberry'
              alt='Rasberry Image'
              src={rasberry}
            />
          </div> */}
        <div className="right-footer">
          <div className="input-areas">
            <div className="sub-btn">Subscribe</div>
            <div>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div class="footer-links">
            <div className="footer-link-wrapper">
              <div class="footer-link-items">
                <h2>About Us</h2>
                <Link to="/explore">Explore</Link>
                <Link to="/ingredent">Ingredients</Link>
                <Link to="/recipe">Recipes</Link>
                <Link to="/cook-now">Cook with ingredient</Link>
              </div>
              <div class="footer-link-items">
                <h2>Contact Us</h2>
                <Link to="/">Contact</Link>
                <Link to="/">Support</Link>
                <Link to="/">Destinations</Link>
                <Link to="/">Sponsorships</Link>
              </div>
            </div>
            <div className="footer-link-wrapper">
              <div class="footer-link-items">
                <h2>Videos</h2>
                <Link to="/">Submit Video</Link>
                <Link to="/">Ambassadors</Link>
                <Link to="/">Agency</Link>
                <Link to="/">Influencer</Link>
              </div>
              <div class="footer-link-items">
                <h2>Social Media</h2>
                <Link to="/">Instagram</Link>
                <Link to="/">Facebook</Link>
                <Link to="/">Youtube</Link>
                <Link to="/">Twitter</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              FooDiction
            </Link>
          </div>
          <small class="website-rights">Release © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
