import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  text, link, dark, outline, className, external,
}) => (
  <a
    href={link}
    target={external ? '_blank' : ''}
    rel={external ? 'noopener noreferrer' : ''}
    className={`button
        ${className || ''}
        ${outline ? 'button--outline' : ''}
        ${dark ? 'button--dark' : ''}`}
  >
    {text}
  </a>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
  outline: PropTypes.bool.isRequired,
  className: PropTypes.string,
  external: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  external: false,
};

export default Button;
