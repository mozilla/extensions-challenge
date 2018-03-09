import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  text, link, dark, outline, className, external, onClick,
}) => (
  <a
    href={link}
    onClick={onClick}
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
  onClick: PropTypes.func,
  className: PropTypes.string,
  external: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  external: false,
  onClick: null,
};

export default Button;
