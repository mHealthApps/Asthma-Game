import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import LinkButton from './LinkButton';
import useOrientation from '../hooks/useOrientation';
// import { Share } from 'react-bootstrap-icons';
import  Confetti  from 'react-confetti';


const CongratulationsImage = ({ image, alt }) => {
  return (
    <div className="inner-container media-container">
      <img className="summary-image" alt={alt} src={image} />
    </div>
  );
}

const CongratulationsExplanation = ({ conditionTitle, orientation, userName }) => {
  return (
    <div className="inner-container summary-explanation-container" style={{
      fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.028 : 0.025))}px`
    }}>
      <h2 style={{
        fontSize: '200%',
      }}>
        Congrats {userName}!
      </h2>
      You have completed the {conditionTitle.charAt(0).toUpperCase()}{conditionTitle.slice(1).toLowerCase()} section
    </div>
  );
}

const Congratulations = ({ image, alt, buttonLink, conditionTitle, userName, audio }) => {
  const orientation = useOrientation();
  const [numPieces, setNumPieces] = useState(150);

  // Audio Setup
  const [soundOff, setSoundOff] = useState(0);
  const audioRef = useRef(new Audio());
  const [initAudio, setInitAudio] = useState(false);

  const playAudio = useCallback(() => {
    if (soundOff === 0) {
      console.log(`play summary audio`);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      console.log('sound disabled');
    }
  }, [soundOff]);

  useEffect(() => {
    let tempSoundOff = localStorage.getItem('soundOff');
    if (tempSoundOff !== null) {
      console.log(`reading in sound choice: ${tempSoundOff}`)
      setSoundOff(Number(tempSoundOff));
    }

    if (!initAudio) {
      if (audio !== undefined) {
        audioRef.current.src = audio;
      }

      setInitAudio(true);
      if (tempSoundOff === null || Number(tempSoundOff) === 0) {
        playAudio();
      }
    }
  }, [initAudio, audio, playAudio])

  useEffect(() => {
    const key = conditionTitle.toLowerCase() + 'Congrats';
    localStorage.setItem(key, 'true');
  }, [conditionTitle])

  useEffect(() => {
    setTimeout(() => {
      setNumPieces(0);
    }, 3000)
  }, [])

  return (
    <div className='congratulations-module'>
      <Confetti numberOfPieces={numPieces} width={window.innerWidth} height={window.innerHeight}/>
      <div className='congratulations-outer-container'>
        <div className='inner-container congratulations-image-container'>
          <CongratulationsImage image={image} alt={alt}/>
        </div>
        <CongratulationsExplanation conditionTitle={conditionTitle} orientation={orientation} userName={userName}/>
        {/*<div className='inner-container summary-button-container' style={{*/}
        {/*  fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.04 : 0.025))}px`,*/}
        {/*}}>*/}
        {/*  <LinkButton text={<div><Share />  Share Results</div>} buttonLink='' stylingClass='share-button' uponClick='none'/>*/}
        {/*</div>*/}
        <div className='inner-container summary-button-container' style={{
          fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.04 : 0.025))}px`,
          fontWeight: 'bold',
          marginTop: window.innerHeight * 0.125,
        }}>
          <LinkButton text='Finish' buttonLink={buttonLink} stylingClass='summary-button' uponClick='none'/>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
