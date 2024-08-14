import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from './TopBar';
import useOrientation from '../hooks/useOrientation';
import { Col } from 'react-bootstrap';
import ResponsiveText from './ResponsiveText';
import newRatio from '../assets/images/new-ratio-image.png';
import lungs from '../assets/images/lungs-diagram.png';
import lungsWide from '../assets/images/lungs-wide.jpg';
import templatePeople from '../assets/images/template-people.jpg';
import templateTrain from '../assets/images/template-train.jpg';
import templateLungs from '../assets/images/lungs-640.jpg';
import { CheckCircleFill, XCircleFill } from 'react-bootstrap-icons';

const images = {
  newRatio,
  lungs,
  lungsWide,
  templatePeople,
  templateTrain,
  templateLungs,
}

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

const QuestionCards = ({ options, answer, orientation, correct, incorrect, storageIndex, conditionTitle }) => {
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
    <div className="quiz-card-outer-container">
      <div className="quiz-card-inner-container">
        {options.map(({ text, image, alt }, i) => (
          <div className="quiz-card" key={i} onClick={() => {
            if (i === answer) {
              correct();
              if (storageIndex !== 'none') {
                updateStorage(conditionTitle, storageIndex);
              }
            } else {
              incorrect();
            }
          }}>
            <div className="grid-item click-through">
              <div className="vertical-center-items click-through">
                <img className="card-image click-through" alt={alt} src={images[image]}/>
              </div>
            </div>
            <div className="grid-item click-through"/>
            <div className="grid-item click-through">
              <ResponsiveText text={text} height='100%' initialSize={(orientation === 'landscape') ? window.innerWidth * 0.02 : window.innerHeight * 0.022}/>
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

const Quiz = ({ quiz, uponCompletion, conditionTitle }) => {
  /* Handling screen orientation */
  const orientation = useOrientation();
  const [answerQuestion, setAnswerQuestion] = useState('none');

  const correct = () => {
    setAnswerQuestion('correct');
  }
  const incorrect = () => {
    setAnswerQuestion('incorrect');
  }

  const reset = useCallback(() => {
    if (uponCompletion !== 'none' && answerQuestion === 'correct') {
      uponCompletion();
    } else {
      setAnswerQuestion('none');
    }
    console.log('quiz reset');
  }, [answerQuestion, uponCompletion]);

  useEffect(() => {
    if (answerQuestion !== 'none') {
      const timer = setTimeout(() => {
        reset();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [answerQuestion, reset]);

  return (
    <div className="quiz-module">
      <TopBar barWidth='100%' title={conditionTitle} orientation={orientation} />
      <QuestionText name={quiz.name} text={quiz.text} />
      {(quiz.type === 'two-options') ?
        <QuestionCards options={quiz.options} answer={quiz.answer} orientation={orientation} correct={correct} incorrect={incorrect} reset={reset} storageIndex={quiz.index} conditionTitle={conditionTitle} /> :
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
