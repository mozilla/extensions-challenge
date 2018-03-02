import React from 'react';

// components
import Link from 'gatsby-link';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Button from '../components/Button';

// images
import ffdev from './img/ffde.png';
import helpImg from './img/help.svg';

configureAnchors({ offset: -90 });

const Section2 = () => (
  <div className="section2">
    <div className="container">
      <ScrollableAnchor id="how">
        <h2 className="enter__title">How to enter the challenge</h2>
      </ScrollableAnchor>
      <div className="enter">
        <div className="enter__three">
          <div className="enter__item">
            <span className="enter__number">1</span>
            <span className="enter__text">
              Create an <br />extension
            </span>
          </div>
          <div className="enter__item">
            <span className="enter__number">2</span>
            <span className="enter__text">
              Submit it to <br />addons.mozilla.org
            </span>
          </div>
          <div className="enter__item">
            <span className="enter__number">3</span>
            <span className="enter__text">
              Fill out the entry form and include a link to your extension
            </span>
          </div>
        </div>

        <div className="enter__buttons">
          <Link className="button button--outline" to="/rules">
            See Complete Rules
          </Link>
          <Button
            text="Submit Now"
            link="https://goo.gl/forms/U4ReAbu8qPsFtMPF3"
            dark={false}
            outline={false}
            external
          />
        </div>
      </div>
    </div>

    <div className="container">
      <hr />
    </div>

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
          dark={false}
          outline={false}
          external
        />
      </div>
    </div>

    <ScrollableAnchor id="resources">
      <div className="help">
        <div className="help__grid container">
          <img className="help__image" src={helpImg} alt="Need Help?" />
          <div className="help__main">
            <div className="help__main-inner">
              <h2>Want help building your extension?</h2>
              <p>Get tools and documentation, or reach out to the community for help!</p>
              <div className="help__buttons">
                <Button
                  text="What are Extensions?"
                  link="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/What_are_WebExtensions"
                  dark={false}
                  outline
                  external
                />
                <Button
                  text="Developer Resources"
                  link="https://developer.mozilla.org/en-US/Add-ons/WebExtensions"
                  dark={false}
                  outline
                  external
                />
                <Button
                  text="Get Help"
                  link="https://developer.mozilla.org/en-US/Add-ons#Contact_us"
                  dark={false}
                  outline
                  external
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  </div>
);

export default Section2;
