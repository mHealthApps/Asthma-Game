import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from './TopBar';
import { Col } from 'react-bootstrap';
import LinkButton from './LinkButton';
import useOrientation from '../hooks/useOrientation';
import BulletPointText from './BulletPointText';
import { useNavigate } from 'react-router-dom';


const SummaryText = () => {
  return (
    <div className="justify-content-center quiz-headers">
      <Col>
        <h2 className="headers asthma-header">You're correct</h2>
        <h2 className="headers card-num-headers quiz-text">Summary</h2>
      </Col>
    </div>
  );
};

const SummaryImage = ({ image, alt }) => {
  return (
    <div className="inner-container media-container">
      <img className="summary-image" alt={alt} src={image} />
    </div>
  );
}

const SummaryExplanation = ({ text, orientation }) => {
  return (
    <div className="inner-container summary-explanation-container" style={{
      fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.034 : 0.030))}px`
    }}>
      <BulletPointText text={text} />
    </div>
  );
}

const Summary = ({ image, alt, explanation, buttonLink, conditionTitle, audio }) => {
  const orientation = useOrientation();
  const navigate = useNavigate();

  const completeSection = () => {
    if (soundOff === 0) {
      audioRef.current.pause();
    }
    setTimeout(() => {
      navigate(buttonLink);
    }, 0)
  }

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

  return (
    <div className='summary-module'>
      <TopBar barWidth='100%' conditionTitle={conditionTitle} orientation={orientation} />
      <SummaryText/>
      <div className='summary-outer-container'>
        <SummaryImage image={image} alt={alt}/>
        <SummaryExplanation text={explanation} orientation={orientation} />
        <div className='inner-container summary-button-container' style={{
          fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.04 : 0.025))}px`,
        }}>
          <LinkButton text='Complete Section' stylingClass='summary-button' uponClick={completeSection} />
        </div>
      </div>
    </div>
  );
};

export default Summary;
