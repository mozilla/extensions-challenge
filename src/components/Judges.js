import React from 'react';
import PropTypes from 'prop-types';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

// images
import mike from './img/judges/mike.png';
import bianca from './img/judges/bianca.png';
import jyotsna from './img/judges/jyotsna.png';
import swarnava from './img/judges/swarnava.png';
import jorge from './img/judges/jorge.png';

configureAnchors({ offset: -90 });

const Judge = ({
  image, name, desc, link,
}) => (
  <div className="judges__single">
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <img src={image} alt={name} />
      <span className="judges__name">{name}</span>
      <span className="judges__desc">{desc}</span>
    </a>
  </div>
);

const Judges = () => (

  <ScrollableAnchor id="judges">
    <div className="judges">
      <div className="container">
        <h2>Judges</h2>
        <p className="pt4 px4">
          A panel of judges will select the finalists for each prize category, and then
          the community will vote to decide the winners of each category.
        </p>
        <div className="judges__wrap">
          <Judge
            image={mike}
            name="Mike Conca"
            desc="WebExtensions APIs Product Manager"
            link="https://mozillians.org/u/mconca"
          />
          <Judge
            image={bianca}
            name="Bianca Danforth"
            desc="Firefox Front End Experiments Engineer"
            link="https://mozillians.org/u/biancadanforth/"
          />
          <Judge
            image={jyotsna}
            name="Jyotsna Gupta"
            desc="Extension Developer"
            link="https://mozillians.org/u/jyotsna17gupta/"
          />
          <Judge
            image={swarnava}
            name="Swarnava Sengupta"
            desc="Featured Add-ons Advisory Board Lead"
            link="https://mozillians.org/u/Swarnava/"
          />
          <Judge
            image={jorge}
            name="Jorge Villalobos"
            desc="AMO Product Manager"
            link="https://mozillians.org/u/jorgev"
          />
        </div>
      </div>
    </div>
  </ScrollableAnchor>
);

Judge.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Judges;
