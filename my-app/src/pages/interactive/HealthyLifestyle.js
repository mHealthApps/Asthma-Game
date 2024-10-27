import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';
import IntroCardFooter from '../../components/IntroCardFooter';
import OrgShirt_Girl_Sitting_5 from '../../assets/images/5_OrgShirt_Girl_Sitting.jpg';
import Toddler_Doctor_17 from '../../assets/images/17_Toddler_Doctor.jpg';
import All_Inhalers_23 from '../../assets/images/23_All Inhalers.jpg';
import Fruits_34 from '../../assets/images/34_Fruits.jpg';
import Asthma_Action_Plan_33 from '../../assets/images/33_Asthma Action Plan.jpg';
import OrgShirt_Girl_Sitting_2Smokers_6 from '../../assets/images/6_OrgShirt_Girl_Sitting_2Smokers.jpg';
import WhiteShirt_Girl_Toddler_9 from '../../assets/images/9_WhiteShirt_Girl_Toddler.jpg';
import templateBeep from '../../assets/audio/template-beep.mp3';
import ReactGA from 'react-ga4';


const healthyLifestyleCards = [
  {
    audio: templateBeep,
    image: OrgShirt_Girl_Sitting_5,
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
    image: Toddler_Doctor_17,
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
    image: All_Inhalers_23,
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
    image: Fruits_34,
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
    image: Asthma_Action_Plan_33,
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
    image: OrgShirt_Girl_Sitting_2Smokers_6,
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
  // GA Lifestyle pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/healthy-lifestyle', title: 'Content: Keeping a Healthy Lifestyle' });
  }, [])
  // useSendPageview('Content: Keeping a Healthy Lifestyle');

  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={healthyLifestyleCards} title="Keeping a Healthy Lifestyle" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={healthyLifestyleQuizOne} uponCompletion={nextScene} conditionTitle='ASTHMA' image={OrgShirt_Girl_Sitting_2Smokers_6} alt='lungs' />
      case 2:
        return <Quiz quiz={healthyLifestyleQuizTwo} uponCompletion={nextScene} conditionTitle='ASTHMA' image={Fruits_34} alt='lungs' />
      case 3:
        return <Summary image={WhiteShirt_Girl_Toddler_9} alt="lungs-wide" explanation={`Keep your child's lungs healthy. Don't let asthma control your child's life`} buttonLink="/asthma-list"/>
      default:
        return <div>Error: rendering failed</div>
    }
  }

  return (
    <div className="asthma-background">
      { renderScene() }
    </div>
  );
}

export default HealthyLifestyle;
