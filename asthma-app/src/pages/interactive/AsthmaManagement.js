import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';
import IntroCardFooter from '../../components/IntroCardFooter';
import TealShirt_Girl_Coughing_4 from '../../assets/images/4_TealShirt_Girl_Coughing.jpg';
import OrgShirt_Girl_Bending_2 from '../../assets/images/2_OrgShirt_Girl_Bending.jpg';
import Paper_Good_38 from '../../assets/images/38_Paper_Good.jpg';
import Paper_Meh_39 from '../../assets/images/39_Paper_Meh.jpg';
import Paper_Bad_40 from '../../assets/images/40_Paper_Bad.jpg';
import Toddler_16 from '../../assets/images/16_Toddler.jpg';
import Blue_Inhaler_21 from '../../assets/images/21_Blue Inhaler.jpg';
import templateBeep from '../../assets/audio/template-beep.mp3';
import ReactGA from 'react-ga4';


const managementCards = [
  {
    audio: templateBeep,
    image: TealShirt_Girl_Coughing_4,
    alt: 'lungs',
    text: <div>
      <h3 className='card-header grid-left'>You will learn:</h3>
      <ul>
        <li className='grid-left'>When to take your child to the doctor</li>
        <li className='grid-left'>How bad is your child’s asthma?</li>
      </ul>
      <IntroCardFooter />
    </div>,
  },
  {
    audio: templateBeep,
    image: OrgShirt_Girl_Bending_2,
    alt: 'template',
    header: 'WHEN SHOULD YOU TAKE YOUR CHILD TO THE DOCTOR OR CLINIC?',
    text: <div>
      <h3 className='card-header-small'>When he / she</h3>
      <ul>
        <li className='grid-left'>Has lots of short breaths</li>
        <li className='grid-left'>Has lots of coughing or wheezing</li>
        <li className='grid-left'>Finds it hard to run and play</li>
        <li className='grid-left'>Wakes up at night with asthma</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: TealShirt_Girl_Coughing_4,
    alt: 'lungs',
    header: 'WHEN SHOULD YOU TAKE YOUR CHILD TO THE DOCTOR OR CLINIC?',
    text: <div>
      <ul>
        <li className='grid-left'>If he / she needs to use the blue inhaler more than 2 times a week (except for exercise)</li>
        <li className='grid-left'>If he / she misses school because of asthma</li>
        <li className='grid-left'>For regular check-ups</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: Paper_Good_38,
    alt: 'lungs',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
    text: <div>
      <ul>
        <li className='grid-left'>If he / she doesn’t need the blue inhaler more than 2 times a week (except for exercise)</li>
        <li className='grid-left'>If he / she isn’t waking up coughing or wheezing</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: Paper_Meh_39,
    alt: 'wide lungs',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
    text: <div>
      <ul>
        <li className='grid-left'>If he / she finds it hard to breathe</li>
        <li className='grid-left'>If he /she uses more of the blue reliever inhaler to help with asthma</li>
        <li className='grid-left'>If he / she has lots of coughing</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: Paper_Meh_39,
    alt: 'wideLungs',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
    text: <div>
      <ul>
        <li className='grid-left'>If he / she may have some wheeze</li>
        <li className='grid-left'>If he / she may find it a little harder to talk or cry</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: Paper_Bad_40,
    alt: 'lungs',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
    text: <div>
      <ul>
        <li className='grid-left'><b>Call ambulance 9-1-1 OR go straight to the hospital / emergency department</b></li>
        <li className='grid-left'>If he / she finds it very hard to breathe</li>
        <li className='grid-left'>If he / she has more coughing</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: Paper_Bad_40,
    alt: 'lungs',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
    text: <div>
      <ul>
        <li className='grid-left'><b>If he / she has sucking in at the neck and chest or have blue lips</b></li>
        <li className='grid-left'>If he / she is using a lot more of the blue reliever inhaler</li>
        <li className='grid-left'>If he / she may have a loud wheeze</li>
        <li className='grid-left'>If he / she finds it hard to talk or cry</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: Toddler_16,
    alt: 'wideLungs',
    text: '',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
  },
]

const managementQuizOne = {
  type: 'two-options',
  name: 'THIS OR THAT',
  text: `How do I know my child’s asthma is under control?` ,
  options: [
    {
      text: 'May have loud wheeze. They may have sucking in at the next and chest and blue lips',
      image: Blue_Inhaler_21,
      alt: 'lungs',
    },
    {
      text: 'Not waking up coughing or wheezing',
      image: OrgShirt_Girl_Bending_2,
      alt: 'template',
    },
  ],
  answer: 1,
  index: 'none',
}

const managementQuizTwo = {
  type: 'two-options',
  name: 'THIS OR THAT',
  text: `How do I know my child’s asthma is under control?` ,
  options: [
    {
      text: 'No need to use the blue reliever inhaler more than 2 times a week (except for exercise)',
      image: Blue_Inhaler_21,
      alt: 'lungs',
    },
    {
      text: 'Very hard to breathe and talk. Lot more coughing, maybe with lots of spit',
      image: OrgShirt_Girl_Bending_2,
      alt: 'template',
    },
  ],
  answer: 0,
  index: 3,
}


const AsthmaManagement = () => {
  // GA Management pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/asthma-management', title: 'Content: Asthma Management' });
  }, [])
  // useSendPageview('Content: Asthma Management');

  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={managementCards} title="Management" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={managementQuizOne} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 2:
        return <Quiz quiz={managementQuizTwo} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 3:
        return <Summary image={TealShirt_Girl_Coughing_4} alt="lungs-wide" explanation={`Your child's asthma is under control if:\n*You don't need to use blue reliever puffer more than 2 times a week\n*Not waking up coughing or wheezing`} buttonLink="/asthma-list"/>
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

export default AsthmaManagement;
