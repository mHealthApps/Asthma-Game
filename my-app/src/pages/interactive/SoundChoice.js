import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import ToggleSound from '../../components/ToggleSound';
import React from 'react';
import useSendPageview from '../../hooks/useSendPageview';


const SoundChoice = () => {
  // GA SoundChoice pageview
  useSendPageview('Sound Choice Page');

  return (
    <div className="sound-module asthma-background">
      <ToggleSound storageKey='soundOff' buttonLink='/asthma-list' />
    </div>
  );
}

export default SoundChoice;
