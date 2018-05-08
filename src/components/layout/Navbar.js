import React from 'react';
import Link from 'gatsby-link';

// Images
import Logo from '../layout/img/logo.svg';

const Navbar = () => (
  <div className="navbar">
    <Link className="navbar__logo" to="/">
      <img src={Logo} alt="Mozilla" />
    </Link>
  </div>
);

export default Navbar;
