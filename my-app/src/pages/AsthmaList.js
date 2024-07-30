import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from '../components/TopBar'
import ListGrid from '../components/ListGrid';


const items = [
  {
    text: 'The Lungs',
    link: '/the-lungs',
  },
  {
    text: 'About Asthma',
    link: '/',
  },
  {
    text: 'Treatment',
    link: '/',
  },
  {
    text: 'Management',
    link: '/',
  },
  {
    text: 'First Aid Emergency',
    link: '/',
  },
  {
    text: 'Keeping a healthy lifestyle',
    link: '/',
  },
];

const AsthmaList = () => (
  <div className="list-module">
    <div className="asthma-red">
      <TopBar barWidth='' conditionTitle='ASTHMA' />
    </div>
    <ListGrid items={items} conditionTitle='ASTHMA' />
  </div>
);

export default AsthmaList;
