import React from 'react';
import PropTypes from 'prop-types';

// images
import heroImage from './img/hero.svg';

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
        <h1 className="hero__title">Firefox Quantum Extensions Challenge</h1>
        <div className="hero__text">
          <h3 className="hero__p-head">
            Meet the first extension all-stars of the Firefox Quantum era!{' '}
          </h3>

          <p>
            More than 100 extensions were submitted to the Firefox Quantum Extensions Challenge.
            After a careful evaluation and selection of finalists by our judging panel, the Firefox
            add-ons community voted for the category winners of Best Tab Manager / Tab Organizer,
            Dynamic Theme, and Games & Entertainment.
          </p>
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
