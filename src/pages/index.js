import React from 'react';

// Components
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Prizes from '../components/Prizes';
import Judges from '../components/Judges';
import Submit from '../components/Submit';

const IndexPage = () => (
  <div>
    <Section1 />
    <Section2 />
    <Prizes />
    <Judges />
    <Submit />
  </div>
);

export default IndexPage;
