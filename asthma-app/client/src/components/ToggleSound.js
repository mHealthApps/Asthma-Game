import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from './TopBar';
import useOrientation from '../hooks/useOrientation';
import LinkButton from './LinkButton';
import useIsGameMode from '../hooks/useIsGameMode';
import { useNavigate } from 'react-router-dom';


const SoundButton = ({ index, text, toggleOff, setToggleOff }) => {
  const handleClick = () => {
    setToggleOff(index);
  }

  return (
    <button onClick={handleClick} className='sound-button' style={{
      color: (toggleOff === index) ? '#fd7647' : 'rgba(155, 155, 155, 0.6)',
      borderColor: (toggleOff === index) ? '#fd7647' : 'rgba(155, 155, 155, 0.6)',
    }}>{text}</button>
  );
}

const SoundCard = ({ storageKey, buttonLink }) => {
  const [soundOff, setSoundOff] = useState(0);
  const [gameModeOff, setGameModeOff] = useState(0);
  const [isGameMode] = useIsGameMode();
  const navigate = useNavigate();
  
  useEffect(() => {
    let tempSoundOff = localStorage.getItem(storageKey);
    if (tempSoundOff !== null) {
      console.log(`reading in previous sound choice: ${tempSoundOff}`)
      setSoundOff(Number(tempSoundOff));
    }
  }, [storageKey])

  useEffect(() => {
    if (isGameMode) {
      setGameModeOff(0);
    } else {
      setGameModeOff(1);
    }
  }, [isGameMode])


  const continueClick = () => {
    updateStorage();
    navigate(buttonLink);
  }

  const updateStorage = () => {
    // console.log(`save users choice of soundOff: ${soundOff} with key: ${storageKey}`);
    localStorage.setItem(storageKey, soundOff.toString());
    if (gameModeOff === 0) {
      localStorage.setItem("gameMode", "true");
    } else {
      localStorage.setItem("gameMode", "false");
    }
  }

  return (
    <div className='quiz-card-outer-container' style={{
      height: `${(window.innerHeight * 0.855)}px`,
    }}>
      <div className='quiz-card-dividing-container' style={{
        height: '100%'
      }}>
        <div className='sound-card'>
          <div className='sound-card-inner-container sound-card-inner-container-short'>
            <h3 className='reset-text'>Voice Over Option</h3>
          </div>
          <div className='sound-card-inner-container'>
            <SoundButton index={0} text='Play with voice ever' toggleOff={soundOff} setToggleOff={setSoundOff} />
          </div>
          <div className='sound-card-inner-container'>
            <SoundButton index={1} text={`Don't play with voice over`} toggleOff={soundOff} setToggleOff={setSoundOff} />
          </div>
          <div className='sound-card-inner-container sound-card-inner-container-short'>
            
          </div>
          <div className='sound-card-inner-container sound-card-inner-container-short'>
            <h3 className='reset-text'>Game Mode Option</h3>
          </div>
          <div className='sound-card-inner-container'>
            <SoundButton index={0} text='Learn with interactive games' toggleOff={gameModeOff} setToggleOff={setGameModeOff} />
          </div>
          <div className='sound-card-inner-container'>
            <SoundButton index={1} text={`Learn with games disabled`} toggleOff={gameModeOff} setToggleOff={setGameModeOff} />
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
      <TopBar oneLine='' orientation={orientation} />
      <SoundCard storageKey={storageKey} buttonLink={buttonLink} />
    </div>
  );
};

export default ToggleSound;
