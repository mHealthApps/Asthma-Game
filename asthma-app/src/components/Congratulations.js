import React, { useEffect, useState } from 'react';
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

const Congratulations = ({ image, alt, buttonLink, conditionTitle, userName }) => {
  const orientation = useOrientation();
  const [numPieces, setNumPieces] = useState(150);

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
        }}>
          <LinkButton text='Finish' buttonLink={buttonLink} stylingClass='summary-button' uponClick='none'/>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
