import React from 'react';
import Helmet from 'react-helmet';
import Typekit from 'react-typekit';

// Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// CSS
import '../styles/style.scss';

// Images
import faviconico from './img/favicon.ico';
import faviconpng from './img/favicon.png';

const TemplateWrapper = ({ children }) => (
  <div>
    <Typekit kitId="zzf2slz" />
    <Helmet>
      {/* Meta */}
      <title>Quantum Extensions Challenge</title>
      <meta
        name="description"
        content="Use your skill, savvy, and creativity to build the next generation of great extensions for Firefox."
      />
      <meta name="keywords" content="HTML, CSS, JavaScript, Firefox, Quantum, Extensions" />

      {/* Favicons */}
      <link rel="shortcut icon" type="image/x-icon" href={faviconico} />
      <link rel="icon" type="image/png" href={faviconpng} sizes="196x196" />

      {/* Social Sharing - Facebook */}
      <meta property="og:url" content="#" />
      <meta property="og:title" content="Join the Quantum Extensions Challenge and win prizes." />
      <meta
        property="og:description"
        content="Use your skill, savvy, and creativity to build the next generation of great extensions for Firefox. Winners will receive prizes such as gift cards, or iPads."
      />
      <meta property="og:image" content="https://i.imgur.com/XBf3fVA.png" />

      {/* Social Sharing - Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@firefox" />
      <meta name="twitter:creator" content="@firefox" />
      <meta name="twitter:title" content="Win prizes for building great extensions for FireFox" />
      <meta
        name="twitter:description"
        content="Join the Quantum Extensions Challenge. Use your skill, savvy, and creativity to build the next generation of great extensions for Firefox. Winners will receive prizes such as gift cards, or iPads."
      />
      <meta name="twitter:image" content="https://i.imgur.com/XBf3fVA.png" />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
