import React from 'react';

/* eslint jsx-a11y/anchor-has-content: 0 */

const Faq = () => (
  <div className="faq">
    <div className="container">
      <h1 className="h2">FAQs:</h1>
      <ul className="faq__list">
        <li>
          <a href="#1">Who is eligible to enter the challenge?</a>
        </li>
        <li>
          <a href="#2">Can I enter the challenge with a team?</a>
        </li>
        <li>
          <a href="#3">How many extensions can I submit to the challenge?</a>
        </li>
        <li>
          <a href="#4">What is the judging criteria for the challenge?</a>
        </li>
        <li>
          <a href="#5">Can you point me to some resources about extension development?</a>
        </li>
        <li>
          <a href="#6">How do I enter the contest?</a>
        </li>
        <li>
          <a href="#7">
            Does my extension need to be compatible with a particular version of Firefox?
          </a>
        </li>
        <li>
          <a href="#8">Can I submit an extension I made before the contest start date?</a>
        </li>
        <li>
          <a href="#9">
            I just ported my Chrome extension to Firefox. Can I submit it to the challenge?
          </a>
        </li>
        <li>
          <a href="#10">I’d like to port my Chrome extension to Firefox. Is it easy?</a>
        </li>
        <li>
          <a href="#11">I have some development questions. Where’s the best place to get help?</a>
        </li>
      </ul>
      <hr />

      <a className="faq__anchor" name="1" />
      <h3>Who is eligible to enter the challenge?</h3>
      <p>This is a worldwide contest and is open to participants in all countries.</p>
      <p>Mozilla staff and contractors are not eligible to enter the challenge.</p>

      <a className="faq__anchor" name="2" />
      <h3>Can I enter the challenge with a team?</h3>
      <p>
        Yes, as long as your team has no more than three members. If you choose to enter as a team,
        you need to designate one member to submit to the challenge and to accept the prize on the
        team’s behalf. Only one prize will be awarded to the team.{' '}
      </p>

      <a className="faq__anchor" name="3" />
      <h3>How many extensions can I submit to the challenge?</h3>
      <p>
        You can submit up to three entries to the challenge, but you can only win one prize in one
        category.{' '}
      </p>

      <a className="faq__anchor" name="4" />
      <h3>What is the judging criteria for the challenge?</h3>
      <p>Here’s what the panel of judges will be looking for when selecting challenge finalists:</p>
      <p className="mb0">Best Dynamic Theme Criteria:</p>
      <ul>
        <li>Appearance</li>
        <li>Originality</li>
        <li>Depth of transformation</li>
      </ul>
      <p className="mb0">Best Tab Management/Organization Criteria:</p>
      <ul>
        <li>Usefulness</li>
        <li>Performance</li>
        <li>User experience</li>
      </ul>
      <p className="mb0">Best Extension for Games & Entertainment Criteria:</p>
      <ul>
        <li>Originality</li>
        <li>Fun factor</li>
        <li>Performance</li>
      </ul>

      <a className="faq__anchor" name="5" />
      <h3>Can you point me to some resources about extension development?</h3>
      <p>
        MDN web docs is a tremendous resource for extension developers. If you are new to extension
        development, we recommend reading this{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/Add-ons/WebExtensions/What_are_WebExtensions"
        >
          introduction to browser extensions
        </a>{' '}
        before getting started.{' '}
      </p>
      <p>
        You can also find all of our documentation about{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/Add-ons/WebExtensions"
        >
          WebExtensions APIs
        </a>, including{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension"
        >
          instructions for porting Chrome extensions to Firefox
        </a>, on MDN web docs.{' '}
      </p>

      <a className="faq__anchor" name="6" />
      <h3>How do I enter the contest?</h3>
      <p>
        When you are ready to publish your extension to addons.mozilla.org (AMO), head to the{' '}
        <a target="_blank" rel="noreferrer noopener" href="https://addons.mozilla.org/developers/">
          Developer Hub
        </a>. Then, fill out the submission form and include link(s) to the extension(s) you would
        like to submit.
      </p>

      <a className="faq__anchor" name="7" />
      <h3>Does my extension need to be compatible with a particular version of Firefox?</h3>
      <p>
        To qualify for the challenge, your extension must be compatible with Firefox 60, which is
        currently in Beta (Firefox Developer Edition). To fully take advantage of the new and
        improved APIs that will land with Firefox 60, we recommend developing and testing your
        extension using{' '}
        <a
          href="https://www.mozilla.org/firefox/developer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Firefox Developer Edition.
        </a>
      </p>

      <a className="faq__anchor" name="8" />
      <h3>Can I submit an extension I made before the contest start date?</h3>
      <p>
        Legacy extensions that were updated to WebExtensions APIs on or after January 1, 2018 are
        eligible for the challenge.
      </p>

      <a className="faq__anchor" name="9" />
      <h3>I just ported my Chrome extension to Firefox. Can I submit it to the challenge?</h3>
      <p>
        Chrome extensions that have been ported to Firefox on or after January 1, 2018, are eligible
        for the challenge.{' '}
      </p>

      <a className="faq__anchor" name="10" />
      <h3>I’d like to port my Chrome extension to Firefox. Is it easy?</h3>
      <p>
        You should be able to port your Chrome extension to Firefox with minimal changes. You can
        find{' '}
        <a
          href="https://developer.mozilla.org/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension"
          target="_blank"
          rel="noopener noreferrer"
        >
          porting instructions
        </a>{' '}
        on MDN web docs.
      </p>
      <p>
        We recommend checking to see if your extension is compatible with Firefox by using our{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://www.extensiontest.com/">
          extension compatibility test
        </a>.
      </p>

      <a className="faq__anchor" name="11" />
      <h3>I have some development questions. Where’s the best place to get help?</h3>
      <p>We recommend the following channels for development support:</p>
      <ul>
        <li>
          Post to our{' '}
          <a
            href="https://discourse.mozilla.org/c/add-ons/development"
            target="_blank"
            rel="noopener noreferrer"
          >
            community forum
          </a>
        </li>
        <li>Email dev-addons [at] mozilla [dot] org</li>
        <li>
          Join us on{' '}
          <a
            href="https://search.mibbit.com/channels/Mozilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            irc.mozilla.org
          </a>{' '}
          in channels #addons, #extdev, or #webextensions
        </li>
      </ul>
    </div>
  </div>
);

export default Faq;
