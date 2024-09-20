import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';
import IntroCardFooter from '../../components/IntroCardFooter';
import templateLungs from '../../assets/images/lungs-640.jpg';
import templateTrain from '../../assets/images/template-train.jpg';
import templatePeople from '../../assets/images/template-people.jpg';
import templateBeep from '../../assets/audio/template-beep.mp3';


const healthyLifestyleCards = [
  {
    audio: templateBeep,
    image: templatePeople,
    alt: 'lungs',
    text: <div>
      <h3 className='card-header grid-left'>You will learn:</h3>
      <ul>
        <li className='grid-left'>How to keep your child’s lungs healthy</li>
        <li className='grid-left'>Keeping your child well</li>
      </ul>
      <IntroCardFooter />
    </div>,
  },
  {
    audio: templateBeep,
    image: templateTrain,
    alt: 'template',
    header: `KEEPING YOUR CHILD'S LUNGS HEALTHY`,
    text: <div>
      <ul>
        <li className='grid-left'>Take your child for regular check-ups with your doctor or health clinic</li>
        <li className='grid-left'>Keep up to date with vaccinations and yearly flu shot</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: templateLungs,
    alt: 'lungs',
    header: `KEEPING YOUR CHILD'S LUNGS HEALTHY`,
    text: <div>
      <ul>
        <li className='grid-left'>Give the blue reliever inhaler when your child has short breath</li>
        <li className='grid-left'>Give your child the preventer inhaler every day as ordered by your doctor</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: templatePeople,
    alt: 'lungs',
    header: `KEEPING YOUR CHILD WELL`,
    text: <div>
      <ul>
        <li className='grid-left'>Breast feed your baby</li>
        <li className='grid-left'>Give your child plenty of good food</li>
        <li className='grid-left'>Encourage your child to run and play</li>
        <li className='grid-left'>Keep your child away from smoke such as cigarette, campfire smoke, bbq</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: templateTrain,
    alt: 'wide lungs',
    header: `DON'T LET ASTHMA CONTROL YOUR CHILD'S LIFE`,
    text: <div>
      <ul>
        <li className='grid-left'>Anyone can have asthma at any age</li>
        <li className='grid-left'>If your child has asthma, it can be well controlled by following your child’s Asthma Action Plan</li>
        <li className='grid-left'>Talk story with your health care provider</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: templateLungs,
    alt: 'wideLungs',
    text: '',
    header: `KEEPING A HEALTHY LIFESTYLE`,
  },
]

const healthyLifestyleQuizOne = {
  type: 'two-options',
  name: 'YES OR NO',
  text: `Will this keep your lungs Healthy?`,
  options: [
    {
      text: 'Yes',
      image: '',
    },
    {
      text: 'No',
      image: '',
    },
  ],
  answer: 1,
  index: 'none',
}

const healthyLifestyleQuizTwo = {
  type: 'two-options',
  name: 'YES OR NO',
  text: `Will this keep your lungs Healthy?`,
  options: [
    {
      text: 'Yes',
      image: '',
    },
    {
      text: 'No',
      image: '',
    },
  ],
  answer: 0,
  index: 5,
}


const HealthyLifestyle = () => {
  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={healthyLifestyleCards} title="Keeping a Healthy Lifestyle" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={healthyLifestyleQuizOne} uponCompletion={nextScene} conditionTitle='ASTHMA' image={templatePeople} alt='lungs' />
      case 2:
        return <Quiz quiz={healthyLifestyleQuizTwo} uponCompletion={nextScene} conditionTitle='ASTHMA' image={templateTrain} alt='lungs' />
      case 3:
        return <Summary image={templateLungs} alt="lungs-wide" explanation={`Keep your child's lungs healthy. Don't let asthma control your child's life`} buttonLink="/asthma-list"/>
      default:
        return <div>Error: rendering failed</div>
    }
  }

  return (
    <div className="asthma-red">
      { renderScene() }
    </div>
  );
}

export default HealthyLifestyle;
