import React from 'react';

// components
import Button from '../components/Button';

// images
import submitImg from './img/submit.svg';

const Submit = () => (
  <div className="submit">
    <div className="submit__grid container">
      <img className="submit__image" src={submitImg} alt="submissions" />
      <div className="submit__main">
        <h2>Submissions will be accepted from March 15 - April 15, 2018.</h2>
        <p>Winners will be announced with the release of Firefox 60 on May 8, 2018.</p>
        <Button
          className="mt4"
          text="Submit Now"
          link="https://goo.gl/forms/U4ReAbu8qPsFtMPF3"
          onClick={() => {
            if (window.ga) {
              ga('send', 'event', 'extensions challenge interactions', 'submit', 'footer');
            }
          }}
          dark={false}
          outline
          external
        />
      </div>
    </div>
  </div>
);

export default Submit;
