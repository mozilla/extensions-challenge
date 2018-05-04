import React from 'react';

// components
import Button from '../components/Button';

// images
import ffdev from './img/ffde.png';

const Section2 = () => (
  <div className="section2">
    <div className="download container">
      <img className="download__image" src={ffdev} alt="Firefox Developer Edition" />
      <p className="download__text mb0">
        With several new or improved APIs currently riding the trains to the Firefox 60 release, we
        encourage you to use Firefox Developer Edition to build and test your submission.{' '}
      </p>
      <div className="download__button">
        <Button
          text="Get Firefox Developer Edition"
          link="https://www.mozilla.org/en-US/firefox/developer/?utm_content=firefox-developer&utm_medium=referral&utm_source=quantum-extensions"
          onClick={() => {
            if (window.ga) {
              ga(
                'send',
                'event',
                'extensions challenge interactions',
                'Firefox Download',
                'Firefox Developer Edition',
              );
            }
          }}
          dark={false}
          outline={false}
          external
        />
      </div>
    </div>
  </div>
);

export default Section2;
