import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from './TopBar';
import useOrientation from '../hooks/useOrientation';
import { Col } from 'react-bootstrap';
import ResponsiveText from './ResponsiveText';
import newRatio from '../assets/images/new-ratio-image.png';
import lungsWide from '../assets/images/lungs-wide.jpg';
import { CheckCircleFill, XCircleFill } from 'react-bootstrap-icons';

const images = {
  newRatio,
  lungsWide,
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

const QuestionCards = ({ options, answer, orientation, correct, incorrect }) => {
  //console.log(orientation);

  return (
    <div className="quiz-card-outer-container">
      <div className="quiz-card-inner-container">
        {options.map(({ text, image, alt }, i) => (
          <div className="quiz-card" key={i} onClick={() => {
            if (i === answer) {
              correct();
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
    <div className="answer-popup-container" onClick={reset}>
      <div className="answer-popup click-through" style={{
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

const Quiz = ({ quiz }) => {
  /* Handling screen orientation */
  const orientation = useOrientation();
  const [answerQuestion, setAnswerQuestion] = useState('none');

  const correct = () => {
    setAnswerQuestion('correct');
  }
  const incorrect = () => {
    setAnswerQuestion('incorrect');
  }

  const reset = () => {
    setAnswerQuestion('none');
  }

  return (
    <div className="quiz-module">
      <TopBar barWidth='100%'/>
      <QuestionText name={quiz.name} text={quiz.text}/>
      {(quiz.type === 'two-options') ?
        <QuestionCards options={quiz.options} answer={quiz.answer} orientation={orientation} correct={correct} incorrect={incorrect}/> :
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
