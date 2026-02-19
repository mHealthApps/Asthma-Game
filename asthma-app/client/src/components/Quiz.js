import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from './TopBar';
import useOrientation from '../hooks/useOrientation';
import { Col } from 'react-bootstrap';
import ResponsiveText from './ResponsiveText';
import { CheckCircleFill, XCircleFill } from 'react-bootstrap-icons';


const QuestionText = ({ text, name }) => {
  return (
    <div className="justify-content-center quiz-headers">
      <Col>
        <h2 className="headers asthma-header">{name}</h2>
        <h2 className="headers card-num-headers quiz-text">{text}</h2>
      </Col>
    </div>
  );
};

const QuizMedia = ({ image, alt, animation }) => {
  return (
    <div className="quiz-media-outer-container">
      <div className="inner-container media-container">
        {(animation !== undefined) ?
          <video className="quiz-media" src={animation} autoPlay loop muted playsInline /> :
          <img className="quiz-media" alt={alt} src={image}/>
        }
      </div>
    </div>
  );
}

const QuestionCards = ({ options, answer, orientation, correct, incorrect, storageIndex, conditionTitle, containerHeight, cardColor }) => {
  //console.log(orientation);

  const updateStorage = () => {
    if (conditionTitle !== undefined) {
      console.log(`conditionTitle: ${conditionTitle}`);
      const key = conditionTitle.toLowerCase() + 'List';
      let completedLists = localStorage.getItem(key);
      console.log(`completedList: ${completedLists}`);
      if (completedLists === null) {
        console.log('error: no storage detected');
      } else {
        completedLists = completedLists.substring(0, storageIndex) + '1' + completedLists.substring(storageIndex + 1, completedLists.length);
        console.log(`new storage data: ${completedLists}`)
        localStorage.setItem(key, completedLists);
      }
    } else {
      console.log('conditionTitle failure');
    }
  }

  return (
    <div className="quiz-card-outer-container" style={{
      height: containerHeight,
    }}>
      <div className="quiz-card-inner-container">
        {options.map(({ text, image, alt }, i) => (
          <div className="quiz-card-dividing-container" style={{
            height: `${80 / options.length}%`,
          }}>
            <div className="quiz-card" key={i} onClick={() => {
              if (i === answer) {
                correct();
                if (storageIndex !== 'none') {
                  updateStorage(conditionTitle, storageIndex);
                }
              } else {
                incorrect();
              }
            }} style={{
              gridTemplateColumns: (image !== '') ? (text !== '') ? (orientation === 'landscape') ? '1fr 0.1fr 1fr' : '1fr 0.1fr 2fr': '1fr 0fr 0fr' : '0fr 0fr 1fr',
              backgroundColor: cardColor,
            }}>
              <div className="grid-item click-through">
                {(image !== '') ?
                <div className="vertical-center-items click-through">
                  <img className="card-image click-through" alt={alt} src={image}/>
                </div> : ''
                }
              </div>
              <div className="grid-item click-through"/>
              <div className="grid-item grid-left click-through">
                <ResponsiveText text={text} height='100%' initialSize={(orientation === 'landscape') ? (image !== '') ? window.innerWidth * 0.040 : window.innerWidth * 0.07 : (image !== '') ? window.innerHeight * 0.032 : window.innerHeight * 0.076} center={true} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AnswerPopup = ({ result, reset, orientation }) => {

  return (
    <div className="popup-container" onClick={reset}>
      <div className="popup click-through" style={{
        width: (orientation === 'landscape') ? `${Math.min(window.innerWidth * 0.18, 225)}px` : `${Math.min(window.innerHeight * 0.2, 225)}px`,
        height: (orientation === 'landscape') ? `${Math.min(window.innerWidth * 0.18, 225)}px` : `${Math.min(window.innerHeight * 0.2, 225)}px`,
      }}>
        {(result === 'correct') ?
          <div className="answer-popup-content">
            <CheckCircleFill className="answer-popup-icon" style={{
              width: (orientation === 'landscape') ? `${Math.min(window.innerWidth * 0.05, 75)}px` : `${Math.min(window.innerHeight * 0.06, 75)}px`,
              height: (orientation === 'landscape') ? `${Math.min(window.innerWidth * 0.05, 75)}px` : `${Math.min(window.innerHeight * 0.06, 75)}px`,
            }}/>
            <h2>Correct!</h2>
          </div> :
          <div className="answer-popup-content">
            <XCircleFill className="answer-popup-icon" style={{
              width: (orientation === 'landscape') ? `${Math.min(window.innerWidth * 0.05, 75)}px` : `${Math.min(window.innerHeight * 0.06, 75)}px`,
              height: (orientation === 'landscape') ? `${Math.min(window.innerWidth * 0.05, 75)}px` : `${Math.min(window.innerHeight * 0.06, 75)}px`,
            }}/>
            <h2>Try again</h2>
          </div>
        }
      </div>
    </div>
  );
}

const Quiz = ({ quiz, uponCompletion, conditionTitle, image, alt, animation, audios }) => {
  /* Handling screen orientation */
  const orientation = useOrientation();
  const [answerQuestion, setAnswerQuestion] = useState('none');

  const correct = () => {
    setAnswerQuestion('correct');
  }
  const incorrect = () => {
    setAnswerQuestion('incorrect');
  }

  // Audio Setup
  const [soundOff, setSoundOff] = useState(0);
  const audioRefs = useRef([new Audio(), new Audio(), new Audio()]);
  const [initAudio, setInitAudio] = useState(false);

  const playAudio = useCallback((index) => {
    if (soundOff === 0) {
      console.log(`play quiz #${index} audio`);
      if (audioRefs.current[index]) {
        audioRefs.current[index].currentTime = 0;
        audioRefs.current[index].play();
      }
    } else {
      console.log('sound disabled');
    }
  }, [soundOff]);

  const reset = useCallback(() => {
    if (soundOff === 0) {
      audioRefs.current[1].pause();
      audioRefs.current[2].pause();
    }
    if (uponCompletion !== 'none' && answerQuestion === 'correct') {
      setAnswerQuestion('none');
      setInitAudio(false);
      uponCompletion();
    } else {
      if (soundOff === 0) {
        playAudio(0);
      }
      setAnswerQuestion('none');
    }
    console.log('quiz reset');
  }, [answerQuestion, playAudio, soundOff, uponCompletion]);

  useEffect(() => {
    let tempSoundOff = localStorage.getItem('soundOff');
    if (tempSoundOff !== null) {
      console.log(`reading in sound choice: ${tempSoundOff}`)
      setSoundOff(Number(tempSoundOff));
    }

    if (!initAudio) {
      if (audios !== undefined) {
        for (let i = 0; i < audioRefs.current.length; i++) {
          audioRefs.current[i].src = audios[i];
        }
      }

      setInitAudio(true);
      if (tempSoundOff === null || Number(tempSoundOff) === 0) {
        playAudio(0);
      }
    }
  }, [audios, initAudio, playAudio])

  useEffect(() => {
    if (answerQuestion !== 'none') {
      if (soundOff === 0) {
        audioRefs.current[0].pause();
        if (answerQuestion === 'correct') {
          playAudio(1);
        } else {
          playAudio(2);
        }
      }
      const timer = setTimeout(() => {
        reset();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [answerQuestion, playAudio, reset, soundOff]);

  return (
    <div className="quiz-module">
      <TopBar barWidth='100%' title={conditionTitle} orientation={orientation} />
      <QuestionText name={quiz.name} text={quiz.text} />
      {(image !== undefined || animation !== undefined) ?
        <QuizMedia image={image} alt={alt} animation={animation} /> : ''
      }
      {(quiz.type === 'two-options') ?
        <QuestionCards options={quiz.options} answer={quiz.answer} orientation={orientation} correct={correct} incorrect={incorrect} reset={reset} storageIndex={quiz.index} conditionTitle={conditionTitle} containerHeight={(image === undefined && animation === undefined) ? window.innerHeight * 0.703 : window.innerHeight * 0.353} /> :
        ''
      }
      {(answerQuestion === 'correct' || answerQuestion === 'incorrect') ?
        <AnswerPopup result={answerQuestion} reset={reset} orientation={orientation} /> :
        ''
      }
    </div>
  );
};

export default Quiz;
