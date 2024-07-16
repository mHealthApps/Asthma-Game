import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from './TopBar';
import useOrientation from '../hooks/useOrientation';
import { Col } from 'react-bootstrap';


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

const QuestionCards = ({ options, answer, orientation }) => {
  return (
    <div className="quiz-card-outer-container outline">
      <div className="quiz-card-inner-container outline">

      </div>
    </div>
  );
};

const Quiz = ({ quiz }) => {
  /* Handling screen orientation */
  const orientation = useOrientation();

  return (
    <div className="quiz-module">
      <TopBar barWidth='100%' />
      <QuestionText name={quiz.name} text={quiz.text} />
      {(quiz.type === 'two-options') ?
        <QuestionCards options={quiz.options} answer={quiz.answer} orientation={orientation} /> :
        ''
      }
    </div>
  );
};

export default Quiz;
