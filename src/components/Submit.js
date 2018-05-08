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
        <h2>Thank you!</h2>
        <p>
          Thank you to everyone who submitted extensions to this challenge! You can view and install
          extensions from all finalists by clicking on the button below.
        </p>
        <Button
          className="mt4"
          text="View All Finalists"
          link="https://addons.mozilla.org/firefox/collections/mozilla/extensions-challenge-honorees/"
          onClick={() => {
            if (window.ga) {
              ga('send', 'event', 'extensions challenge interactions', 'view-finalists', 'footer');
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
