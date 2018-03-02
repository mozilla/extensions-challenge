import React from 'react';
import PropTypes from 'prop-types';

// images
import heroImage from './img/hero.svg';
import winner1 from './img/winner1.svg';
import winner2 from './img/winner2.svg';
import winner3 from './img/winner3.svg';

// For repeating category section
const Category = ({ image, text }) => (
  <div className="categories__item">
    <div className="categories__image">
      <img src={image} alt="Category" />
    </div>
    <div className="categories__text">{text}</div>
  </div>
);

// Main Component

const Section1 = () => (
  <div className="section-1">
    <div className="hero">
      <div className="hero__grid container">
        <img className="hero__img" src={heroImage} alt="Quantum Extensions Challenge" />
        <h1 className="hero__title">Quantum Extensions Challenge</h1>
        <p className="hero__text">
          We're looking for the first Firefox extensions aces of the Quantum era. We're asking
          developers to use their skill and creativity to launch the next generation of Firefox
          extensions. If you can build a website, you can build an extension. Interested? Read on!
        </p>
      </div>
    </div>

    <div className="categories">
      <div className="container">
        <h2>We'll be crowning winners in the following categories:</h2>
        <p className="categories__text">
          Submit your extension for a chance to become one of the newest champion extension
          developers for Firefox and get your add-on promoted to all Firefox users.
        </p>
        <div className="categories__three">
          <Category image={winner1} text="Best in Games & Entertainment" />
          <Category image={winner2} text="Best Dynamic Theme" />
          <Category image={winner3} text="Best Tab Manager / Organizer" />
        </div>
      </div>
    </div>
  </div>
);

Category.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Section1;
