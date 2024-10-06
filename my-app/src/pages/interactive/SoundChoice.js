import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import ToggleSound from '../../components/ToggleSound';
import React from 'react';


const SoundChoice = () => {
  return (
    <div className="asthma-red">
      <ToggleSound storageKey='soundOff' buttonLink='/asthma-list' />
    </div>
  );
}

export default SoundChoice;
