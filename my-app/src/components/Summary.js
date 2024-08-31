import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from './TopBar';
import { Col } from 'react-bootstrap';
import LinkButton from './LinkButton';
import lungs from '../assets/images/lungs-diagram.png';
import lungsWide from '../assets/images/lungs-wide.jpg';
import largeImage from '../assets/images/large-image-red.png';
import newRatio from '../assets/images/new-ratio-image.png';
import templateLungs from '../assets/images/lungs-640.jpg';
import useOrientation from '../hooks/useOrientation';
import BulletPointText from './BulletPointText';


const images = {
  lungs,
  lungsWide,
  largeImage,
  newRatio,
  templateLungs,
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
    <div className="inner-container image-container">
      <img className="summary-image" alt={alt} src={image} />
    </div>
  );
}

const SummaryExplanation = ({ text, orientation }) => {
  return (
    <div className="inner-container summary-explanation-container" style={{
      fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.028 : 0.025))}px`
    }}>
      <BulletPointText text={text} />
    </div>
  );
}

const Summary = ({ image, alt, explanation, buttonLink, conditionTitle }) => {
  const orientation = useOrientation();

  return (
    <div className='summary-module'>
      <TopBar barWidth='100%' conditionTitle={conditionTitle} orientation={orientation} />
      <SummaryText/>
      <div className='summary-outer-container'>
        <SummaryImage image={images[image]} alt={alt}/>
        <SummaryExplanation text={explanation} orientation={orientation} />
        <div className='inner-container summary-button-container' style={{
          fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.04 : 0.025))}px`,
        }}>
          <LinkButton text='Complete Section' buttonLink={buttonLink} stylingClass='summary-button' uponClick='none' />
        </div>
      </div>
    </div>
  );
};

export default Summary;
