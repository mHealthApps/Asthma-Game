import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import ToggleSound from '../../components/ToggleSound';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';


const SoundChoice = () => {
  // GA SoundChoice pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/sound-choice', title: 'Sound Choice Page' });
  }, [])
  // useSendPageview('Sound Choice Page');

  return (
    <div className="sound-module asthma-background">
      <ToggleSound storageKey='soundOff' buttonLink='/asthma-list' />
    </div>
  );
}

export default SoundChoice;
