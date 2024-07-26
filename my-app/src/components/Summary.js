import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from './TopBar';
import { Col } from 'react-bootstrap';

const SummaryText = () => {
  return (
    <div className="justify-content-center quiz-headers">
      <Col>
        <h2 className="headers asthma-header">SUMMARY</h2>
        <h2 className="headers card-num-headers quiz-text">You're correct</h2>
      </Col>
    </div>
  );
};

const SummaryImage = ({ image }) => {
  return (
    <div className="summary-inner-container summary-image-container outline">

    </div>
  );
}

const SummaryExplanation = ({ text }) => {
  return (
    <div className="summary-inner-container summary-explanation-container outline">

    </div>
  );
}

const SummaryButton = () => {
  return (
    <div className="summary-inner-container summary-button-container outline">

    </div>
  );
}

const Summary = () => {


  return (
    <div className='summary-module'>
      <TopBar barWidth='100%'/>
      <SummaryText/>
      <div className="summary-outer-container outline">
        <SummaryImage image='none'/>
        <SummaryExplanation text="none" />
        <SummaryButton />
      </div>
    </div>
  );
};

export default Summary;
