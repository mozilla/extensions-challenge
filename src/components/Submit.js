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
        <h2>Voting is open until April 29 at 11:59pm. PDT</h2>
        <p>Winners will be announced with the release of Firefox 60 on May 8, 2018.</p>
        <Button
          className="mt4"
          text="Vote"
          link="https://goo.gl/forms/QWSCjiCgMisXT6aa2"
          onClick={() => {
            if (window.ga) {
              ga('send', 'event', 'extensions challenge interactions', 'vote', 'footer');
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
