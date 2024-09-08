import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import LinkButton from './LinkButton';
import lungs from '../assets/images/lungs-diagram.png';
import lungsWide from '../assets/images/lungs-wide.jpg';
import largeImage from '../assets/images/large-image-red.png';
import newRatio from '../assets/images/new-ratio-image.png';
import templateLungs from '../assets/images/lungs-640.jpg';
import useOrientation from '../hooks/useOrientation';
import { Share } from 'react-bootstrap-icons';
import  Confetti  from 'react-confetti';


const images = {
  lungs,
  lungsWide,
  largeImage,
  newRatio,
  templateLungs,
}


const CongratulationsImage = ({ image, alt }) => {
  return (
    <div className="inner-container image-container">
      <img className="summary-image" alt={alt} src={image} />
    </div>
  );
}

const CongratulationsExplanation = ({ conditionTitle, orientation }) => {
  return (
    <div className="inner-container summary-explanation-container" style={{
      fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.028 : 0.025))}px`
    }}>
      <h2 style={{
        fontSize: '250%',
      }}>
        Congrats!
      </h2>
      You have completed the {conditionTitle.charAt(0).toUpperCase()}{conditionTitle.slice(1).toLowerCase()} section
    </div>
  );
}

const Congratulations = ({ image, alt, buttonLink, conditionTitle }) => {
  const orientation = useOrientation();
  const [numPieces, setNumPieces] = useState(150);

  useEffect(() => {
    const key = conditionTitle.toLowerCase() + 'Congrats';
    localStorage.setItem(key, 'true');
  }, [conditionTitle])

  useEffect(() => {
    setTimeout(() => {
      setNumPieces(0);
      console.log(images);
    }, 3000)
  }, [])

  return (
    <div className='congratulations-module'>
      <Confetti numberOfPieces={numPieces} width={window.innerWidth} height={window.innerHeight}/>
      <div className='congratulations-outer-container'>
        <div className='inner-container congratulations-image-container'>
          <CongratulationsImage image={image} alt={alt}/>
        </div>
        <CongratulationsExplanation conditionTitle={conditionTitle} orientation={orientation}/>
        <div className='inner-container summary-button-container' style={{
          fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.04 : 0.025))}px`,
        }}>
          <LinkButton text={<div><Share />  Share Results</div>} buttonLink='' stylingClass='share-button' uponClick='none'/>
        </div>
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
