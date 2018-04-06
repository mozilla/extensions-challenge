import React from 'react';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

// images
import prize1 from './img/prize1.png';
import prize2 from './img/prize2.png';
import prize3 from './img/prize3.png';

configureAnchors({ offset: -90 });

const Prizes = () => (
  <ScrollableAnchor id="prizes">
    <div className="prizes">
      <div className="container">
        <h2>Prizes</h2>
        <div className="prizes__list">
          <div className="prizes__item">
            <img src={prize1} alt="iPad Pro" />
            <p>
              Category winners will receive an Apple iPad Pro 10.5” Wifi 256GB and be featured on
              addons.mozilla.org.
            </p>
          </div>
          <div className="prizes__item">
            <img src={prize2} alt="Amazon Gift Card" />
            <p>Runners up in each category will receive a $250 USD Amazon gift card.</p>
          </div>
          <div className="prizes__item">
            <img src={prize3} alt="WeTransfer Plus" />
            <p>All entrants with valid submissions will receive one free year of <a href="https://wetransfer.com/about">WeTransfer Plus</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </ScrollableAnchor>
);

export default Prizes;
