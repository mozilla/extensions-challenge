import React from 'react';

// components
import Winner from './Winner';

// images
import session from './img/extensions/session-sync.png';
import envify from './img/extensions/envify.png';
import radio from './img/extensions/worldwide-radio.png';

const Prizes = () => (
  <div className="prizes">
    <div className="container">
      <h2>Winners</h2>
      <div className="prizes__list">
        <Winner
          link="https://addons.mozilla.org/firefox/addon/session-sync/"
          icon={session}
          ext="Session Sync"
          name="Gabriel Ivanica"
          cat="Best Tab Manager / Tab Organizer"
        />
        <Winner
          link="https://addons.mozilla.org/firefox/addon/envify/"
          icon={envify}
          ext="Envify"
          name="Yoann Lecuyer"
          cat="Best Dynamic Theme"
        />
        <Winner
          link="https://addons.mozilla.org/firefox/addon/worldwide-radio/"
          icon={radio}
          ext="Worldwide Radio"
          name="Oleksandr"
          cat="Best Extension for Games & Entertainment"
        />
      </div>
    </div>
  </div>
);

export default Prizes;
