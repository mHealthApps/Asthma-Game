import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from '../components/TopBar'
import ListGrid from '../components/ListGrid';


const items = ['The Lungs', 'About Asthma', 'Treatment', 'Management', 'First Aid Emergency', 'Keeping a healthy lifestyle'];

const AsthmaList = () => (
  <div className="list-module">
    <div className="asthma-red">
      <TopBar barWidth='' conditionTitle='ASTHMA' />
    </div>
    <ListGrid items={items} conditionTitle='ASTHMA' />
  </div>
);

export default AsthmaList;
