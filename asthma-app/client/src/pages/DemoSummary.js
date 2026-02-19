import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Summary from '../components/Summary';
import React from 'react';


const DemoSummary = () => {


  return (
    <div className="asthma-red">
      <Summary image="lungsWide" alt="lungs-wide" explanation="Oxygen helps our body to function properly. We need around 432 litres of oxygen per day." buttonLink="/list-page"/>
    </div>
  );
}

export default DemoSummary;
