import React from 'react';
import PropTypes from 'prop-types';

const Winner = ({
  icon, name, cat, ext, link,
}) => (
  <a className="winner" href={link} target="_blank" rel="noopener noreferrer">
    <img className="winner__icon" src={icon} alt="extension icon" />
    <div className="winner__ext">{ext}</div>
    <div className="winner__name">{name}</div>
    <div className="winner__cat">{cat}</div>
  </a>
);

Winner.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  ext: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Winner;
