import React from 'react';

// components

// images
import wetransfer from './img/wetransfer.svg';

const Section2 = () => (
  <div className="section2">
    <div className="container submit__grid">
      <a
        className="hero__we-logo"
        href="https://wetransfer.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="" src={wetransfer} alt="WeTransfer" />
      </a>
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
);

export default Section2;
