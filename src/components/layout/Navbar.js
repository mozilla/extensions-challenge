import React from 'react';
import Link from 'gatsby-link';

// Images
import Logo from '../layout/img/logo.svg';

const Navbar = () => (
  <div className="navbar">
    <Link className="navbar__logo" to="/">
      <img src={Logo} alt="Mozilla" />
    </Link>
    <ul className="navbar__list">
      <li className="navbar__item">
        <Link to="/faq" className="navbar__link">
          FAQ
        </Link>
      </li>
      <li className="navbar__cta">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/forms/QWSCjiCgMisXT6aa2"
          onClick={() => {
            if (window.ga) {
              ga('send', 'event', 'extensions challenge interactions', 'vote', 'sticky nav');
            }
          }}
        >
          Vote
        </a>
      </li>
    </ul>
  </div>
);

export default Navbar;
