import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from './TopBar';
import useOrientation from '../hooks/useOrientation';
import LinkButton from './LinkButton';
import { useNavigate } from 'react-router-dom';


const SoundButton = ({ index, text, soundOff, setSoundOff }) => {
  const handleClick = () => {
    setSoundOff(index);
  }

  return (
    <button onClick={handleClick} className='sound-button' style={{
      color: (soundOff === index) ? '#fd7647' : 'rgba(155, 155, 155, 0.6)',
      borderColor: (soundOff === index) ? '#fd7647' : 'rgba(155, 155, 155, 0.6)',
    }}>{text}</button>
  );
}

const SoundCard = ({ storageKey, buttonLink }) => {
  const [soundOff, setSoundOff] = useState(0);
  const navigate = useNavigate();

  const continueClick = () => {
    updateStorage();
    navigate(buttonLink);
  }

  const updateStorage = () => {
    console.log(`save users choice of soundOff: ${soundOff}`);
  }

  return (
    <div className='quiz-card-outer-container' style={{
      height: `${(window.innerHeight * 0.855)}px`,
    }}>
      <div className='quiz-card-dividing-container' style={{
        height: '100%'
      }}>
        <div className='sound-card'>
          <div className='sound-card-inner-container'>
            <SoundButton index={0} text='Play with voice ever' soundOff={soundOff} setSoundOff={setSoundOff} />
          </div>
          <div className='sound-card-inner-container'>
            <SoundButton index={1} text={`Don't play with voice over`} soundOff={soundOff} setSoundOff={setSoundOff} />
          </div>
          <div className='sound-card-inner-container'>
            <LinkButton text='Continue' stylingClass='final-card-button' uponClick={continueClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ToggleSound = ({ storageKey, buttonLink }) => {
  const orientation = useOrientation();

  return (
    <div className='toggle-sound-module'>
      <TopBar onlyHome={true} orientation={orientation} />
      <SoundCard storageKey={storageKey} buttonLink={buttonLink} />
    </div>
  );
};

export default ToggleSound;
