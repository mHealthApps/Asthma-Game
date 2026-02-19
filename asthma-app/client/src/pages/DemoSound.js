import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import ToggleSound from '../components/ToggleSound';
import React from 'react';


const DemoSound = () => {
  return (
    <div className="asthma-red">
      <ToggleSound buttonLink='/asthma-list' />
    </div>
  );
}

export default DemoSound;
