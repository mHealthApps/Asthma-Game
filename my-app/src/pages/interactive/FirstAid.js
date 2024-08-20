import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';


const firstAidCards = [
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: 'You will learn:\n*The four steps in an asthma emergency (asthma attack)\n*What to do when asthma does not get better',
  },
  {
    image: 'templateTrain',
    alt: 'template',
    text: '*Sit your child up\n*Stay calm\n*Do not leave your child',
    header: 'FIRST AID EMERGENCY: STEP 1',

  },
  {
    image: 'templateLungs',
    alt: 'lungs',
    text: '*Shake the blue inhaler\n*Put 1 puff into the spacer\n*Get the child to take 4 breaths from the spacer\nREPEAT THE STEPS 4 TIMES.\n REMEMBER, SHAKE..2 PUFF..4 BREATHS',
    header: 'FIRST AID EMERGENCY: STEP 2',

  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: '*Wait 4 minutes\n*If no improvement, repeat Step 2',
    header: 'FIRST AID EMERGENCY: STEP 3',
  },
  {
    image: 'templateTrain',
    alt: 'wide lungs',
    text: '*If not getting better, call 9-1-1 and ask for an ambulance\n*Tell the 9-1-1 operator or the clinic that “someone is having an asthma attack”',
    header: 'FIRST AID EMERGENCY: STEP 4',

  },
  {
    image: 'templateLungs',
    alt: 'wideLungs',
    text: '*They will tell you what to do\n*Keep giving 4 separate puffs or the blue inhaler every 4 minutes until help arrives',
    header: 'FIRST AID EMERGENCY: STEP 4',
  },
  {
    image: 'templatePeople',
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
      image: 'templatePeople',
      alt: 'lungs',
    },
    {
      text: 'False',
      image: 'templateTrain',
      alt: 'template',
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
      image: 'templatePeople',
      alt: 'lungs',
    },
    {
      text: 'False',
      image: 'templateTrain',
      alt: 'template',
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
      image: 'templatePeople',
      alt: 'lungs',
    },
    {
      text: 'False',
      image: 'templateTrain',
      alt: 'template',
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
      image: 'templatePeople',
      alt: 'lungs',
    },
    {
      text: 'False',
      image: 'templateTrain',
      alt: 'template',
    },
  ],
  answer: 1,
  index: 4,
}


const FirstAid = () => {
  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={firstAidCards} title="First Aid Emergency" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={firstAidQuizOne} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 2:
        return <Quiz quiz={firstAidQuizTwo} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 3:
        return <Quiz quiz={firstAidQuizThree} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 4:
        return <Quiz quiz={firstAidQuizFour} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 5:
        return <Summary image="templateLungs" alt="lungs-wide" explanation={`It's important to know the Asthma First Aid Emergency steps`} buttonLink="/asthma-list"/>
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

export default FirstAid;
