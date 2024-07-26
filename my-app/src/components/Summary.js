import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from './TopBar';
import { Col } from 'react-bootstrap';
import lungs from '../assets/images/lungs-diagram.png';
import lungsWide from '../assets/images/lungs-wide.jpg';
import largeImage from '../assets/images/large-image-red.png';
import newRatio from '../assets/images/new-ratio-image.png';

const images = {
  lungs,
  lungsWide,
  largeImage,
  newRatio,
}

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

const SummaryImage = ({ image, alt }) => {
  return (
    <div className="summary-inner-container summary-image-container outline">
      <img className="summary-image" alt={alt} src={image} />
    </div>
  );
}

const SummaryExplanation = ({ text }) => {
  return (
    <div className="summary-inner-container summary-explanation-container outline">
      {text}
    </div>
  );
}

const SummaryButton = () => {
  return (
    <div className="summary-inner-container summary-button-container outline">

    </div>
  );
}

const Summary = ({ image, alt, explanation}) => {


  return (
    <div className='summary-module'>
      <TopBar barWidth='100%'/>
      <SummaryText/>
      <div className="summary-outer-container outline">
        <SummaryImage image={images[image]} alt={alt} />
        <SummaryExplanation text={explanation} />
        <SummaryButton />
      </div>
    </div>
  );
};

export default Summary;
