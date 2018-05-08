import React from 'react';

// Components
import Section1 from '../components/Section1';
import Prizes from '../components/Prizes';
import Judges from '../components/Judges';
import Submit from '../components/Submit';
import Section2 from '../components/Section2';

const IndexPage = () => (
  <div>
    <Section1 />
    <Prizes />
    <Judges />
    <Submit />
    <Section2 />
  </div>
);

export default IndexPage;
