import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';
import IntroCardFooter from '../../components/IntroCardFooter';
import TealShirt_Girl_Coughing_4 from '../../assets/images/4_TealShirt_Girl_Coughing.jpg';
import OrgShirt_Girl_Sitting_5 from '../../assets/images/5_OrgShirt_Girl_Sitting.jpg';
import BlueShirt_Boy_Spacer_3 from '../../assets/images/3_BlueShirt_Boy_Spacer_v2.jpg';
import Clock_35 from '../../assets/images/35_Clock.jpg';
import Ambulance_36 from '../../assets/images/36_Ambulance.jpg';
import WhiteShirt_Girl_Lungs_10 from '../../assets/images/10_WhiteShirt_Girl_Lungs.jpg';
import Spacer_19 from '../../assets/images/19_Spacer.jpg';
import templateBeep from '../../assets/audio/template-beep.mp3';
import ReactGA from 'react-ga4';


const firstAidCards = [
  {
    audio: templateBeep,
    image: TealShirt_Girl_Coughing_4,
    alt: 'lungs',
    text: <div>
      <h3 className='card-header grid-left'>You will learn:</h3>
      <ul>
        <li className='grid-left'>The four steps in an asthma emergency (asthma attack)</li>
        <li className='grid-left'>What to do when asthma does not get better</li>
      </ul>
      <IntroCardFooter />
    </div>,
  },
  {
    audio: templateBeep,
    image: OrgShirt_Girl_Sitting_5,
    alt: 'template',
    header: 'FIRST AID EMERGENCY: STEP 1',
    text: <div>
      <ul>
        <li className='grid-left'>Sit your child up</li>
        <li className='grid-left'>Stay calm</li>
        <li className='grid-left'>Do not leave your child</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: BlueShirt_Boy_Spacer_3,
    alt: 'lungs',
    header: 'FIRST AID EMERGENCY: STEP 2',
    text: <div>
      <ul>
        <li className='grid-left'>Shake the blue inhaler</li>
        <li className='grid-left'>Put 1 puff into the spacer</li>
        <li className='grid-left'>Get the child to take 4 breaths from the spacer</li>
      </ul>
      <b>
        <div>REPEAT THE STEPS 4 TIMES.</div>
        <div>
          <div className='asthma-orange'>REMEMBER, SHAKE..2 PUFF..4 BREATHS</div>
        </div>
      </b>
    </div>,
  },
  {
    audio: templateBeep,
    image: Clock_35,
    alt: 'lungs',
    header: 'FIRST AID EMERGENCY: STEP 3',
    text: <div>
      <ul>
        <li className='grid-left'>Wait 4 minutes</li>
        <li className='grid-left'>If no improvement, repeat Step 2</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: Ambulance_36,
    alt: 'wide lungs',
    header: 'FIRST AID EMERGENCY: STEP 4',
    text: <div>
      <ul>
        <li className='grid-left'>If not getting better, call 9-1-1 and ask for an ambulance</li>
        <li className='grid-left'>Tell the 9-1-1 operator or the clinic that “someone is having an asthma attack”</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: Ambulance_36,
    alt: 'wideLungs',
    header: 'FIRST AID EMERGENCY: STEP 4',
    text: <div>
      <ul>
        <li className='grid-left'>They will tell you what to do</li>
        <li className='grid-left'>Keep giving 4 separate puffs or the blue inhaler every 4 minutes until help arrives</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: OrgShirt_Girl_Sitting_5,
    alt: 'lungs',
    text: '',
    header: 'FIRST AID EMERGENCY',
  },
]

const firstAidQuizOne = {
  type: 'two-options',
  name: 'TRUE OR FALSE',
  text: `Step 1 is if not getting better call 9-1-1`,
  options: [
    {
      text: 'True',
      image: '',
    },
    {
      text: 'False',
      image: '',
    },
  ],
  answer: 1,
  index: 'none',
}

const firstAidQuizTwo = {
  type: 'two-options',
  name: 'TRUE OR FALSE',
  text: `Step 2 Shake the blue inhaler, put 1 puff into the spacer, take 4 breaths from the spacer`,
  options: [
    {
      text: 'True',
      image: '',
    },
    {
      text: 'False',
      image: '',
    },
  ],
  answer: 0,
  index: 'none',
}

const firstAidQuizThree = {
  type: 'two-options',
  name: 'TRUE OR FALSE',
  text: `Step 3 is to wait 4 minutes, if no improvement repeat step 2`,
  options: [
    {
      text: 'True',
      image: '',
    },
    {
      text: 'False',
      image: '',
    },
  ],
  answer: 0,
  index: 'none',
}

const firstAidQuizFour = {
  type: 'two-options',
  name: 'TRUE OR FALSE',
  text: `Step 4 is to sit your child up`,
  options: [
    {
      text: 'True',
      image: '',
    },
    {
      text: 'False',
      image: '',
    },
  ],
  answer: 1,
  index: 4,
}


const FirstAid = () => {
  // GA FirstAid pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/first-aid', title: 'Cards: First Aid Emergency' });
  }, [])
  // useSendPageview('Content: First Aid Emergency');

  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={firstAidCards} title="First Aid Emergency" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={firstAidQuizOne} uponCompletion={nextScene} conditionTitle='ASTHMA' image={Ambulance_36} />
      case 2:
        return <Quiz quiz={firstAidQuizTwo} uponCompletion={nextScene} conditionTitle='ASTHMA' image={Spacer_19} />
      case 3:
        return <Quiz quiz={firstAidQuizThree} uponCompletion={nextScene} conditionTitle='ASTHMA' image={Clock_35} />
      case 4:
        return <Quiz quiz={firstAidQuizFour} uponCompletion={nextScene} conditionTitle='ASTHMA' image={OrgShirt_Girl_Sitting_5} />
      case 5:
        return <Summary image={WhiteShirt_Girl_Lungs_10} alt="lungs-wide" explanation={`It's important to know the Asthma First Aid Emergency steps`} buttonLink="/asthma-list"/>
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

export default FirstAid;
