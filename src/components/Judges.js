import React from 'react';

// components
import Winner from './Winner';

// images
import tiptab from './img/extensions/tiptab.png';
import native from './img/extensions/nativedark.png';
import invaders from './img/extensions/webinvade.png';

const Judges = () => (
  <div className="judges">
    <div className="container">
      <h2>Runners-Up</h2>
      <div className="judges__wrap">
        <Winner
          link="https://addons.mozilla.org/firefox/addon/tip-tab/"
          icon={tiptab}
          ext="Tip Tab"
          name="William Wng"
          cat="Tab Manager / Tab Organizer"
        />
        <Winner
          link="https://addons.mozilla.org/firefox/addon/native-dark/"
          icon={native}
          ext="Native Dark"
          name="spikespaz"
          cat="Dynamic Theme"
        />
        <Winner
          link="https://addons.mozilla.org/firefox/addon/web-invaders/"
          icon={invaders}
          ext="Web Invaders"
          name="Yalini"
          cat="Games & Entertainment"
        />
      </div>
    </div>
  </div>
);

export default Judges;
