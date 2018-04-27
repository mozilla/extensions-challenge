import React from 'react';
import PropTypes from 'prop-types';

// images
import heroImage from './img/hero.svg';
import winner1 from './img/winner1.svg';
import winner2 from './img/winner2.svg';
import winner3 from './img/winner3.svg';
import wetransfer from './img/wetransfer.svg';

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
        <p className="hero__text">
          We're looking for the first Firefox extension all-stars of the Quantum era. Our judges
          reviewed more than 100 submissions and have selected the finalists for each prize
          category. Now, it’s time for the add-on community to vote for the winners. Use{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mozilla.org/firefox/channel/desktop/"
          >
            Firefox Beta
          </a>{' '}
          or{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mozilla.org/firefox/developer/"
          >
            Firefox Developer Edition
          </a>{' '}
          and take these extensions for a test drive (many of the APIs used are not yet available on
          Firefox 59, the current release), then vote for your favorites{' '}
          <a
            href="https://goo.gl/forms/QWSCjiCgMisXT6aa2"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
        </p>

        <img className="hero__we-logo" src={wetransfer} alt="WeTransfer" />

        <p className="hero__we-text">
          The Firefox Quantum Extensions Challenge is supported by WeTransfer, who is donating a
          1-year WeTransfer Plus account for its file transfer and storage service to eligible
          developers.{' '}
          <a href="https://wetransfer.com/about" target="_blank" rel="noopener noreferrer">
            Learn more
          </a>{' '}
          about WeTransfer.
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
