import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import TopBar from './TopBar';
import { Col } from 'react-bootstrap';
import LinkButton from './LinkButton';
import useOrientation from '../hooks/useOrientation';
import BulletPointText from './BulletPointText';


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

const Summary = ({ image, alt, explanation, buttonLink, conditionTitle }) => {
  const orientation = useOrientation();

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
          <LinkButton text='Complete Section' buttonLink={buttonLink} stylingClass='summary-button' uponClick='none' />
        </div>
      </div>
    </div>
  );
};

export default Summary;
