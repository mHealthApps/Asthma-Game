import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';


const treatmentCards = [
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: 'You will learn:\n*How asthma is treated\n*How asthma medications work\n*Different types of inhalers used',
  },
  {
    image: 'templateTrain',
    alt: 'template',
    text: '*It is important to take your child for regular check-ups with your doctor or health clinic\n*The Doctor will write an “Asthma Action Plan”',
    header: 'TREATMENT OF ASTHMA',
  },
  {
    image: 'templateLungs',
    alt: 'lungs',
    text: `*An ‘Asthma Action Plan’ helps you to know what to do every day, and when your child’s asthma is becoming worse\n*The Doctor may give medication for your child’s asthma`,
    header: 'HOW DO WE TREAT ASTHMA?',
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: 'Relievers\n*Work fast\n*Help short breath, cough, and wheeze\n*Always carry your blue inhaler and spacer with you',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
  },
  {
    image: 'templateTrain',
    alt: 'wide lungs',
    text: 'Preventers\n*Makes breathing tubes less sensitive\n*Reduces swelling in breathing tubes.',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
  },
  {
    image: 'templateLungs',
    alt: 'wideLungs',
    text: 'Preventers\n*Needs to be taken every day\n*Works best when taken for a long time\n*Rinse, gargle, and spit after taking the inhaler',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: 'Combination medications\n(Two medicines mixed together)\n*Makes breathing tubes less sensitive\n*Reduces swelling in breathing tubes',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
  },
  {
    image: 'templateTrain',
    alt: 'lungs',
    text: 'Combination medications\n(Two medicines mixed together)\n*Needs to be taken every day\n*Works best when taken for a long time\n*Rinse, gargle, and spit after taking the inhaler',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
  },
  {
    image: 'templateLungs',
    alt: 'wideLungs',
    text: '*Inhalers need to be used with a spacer so medicines get into the breathing tubes',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: 'Video Placeholder',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
  },
]

const treatmentQuizOne = {
  type: 'two-options',
  name: 'TRUE OR FALSE',
  text: `Reliever is fast acting`,
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

const treatmentQuizTwo = {
  type: 'two-options',
  name: 'TRUE OR FALSE',
  text: `Preventer is taken every day`,
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

const treatmentQuizThree = {
  type: 'two-options',
  name: 'TRUE OR FALSE',
  text: `Combination is best taken over a long time`,
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
  index: 2,
}


const AsthmaTreatment = () => {
  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={treatmentCards} title="Treatment of asthma" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={treatmentQuizOne} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 2:
        return <Quiz quiz={treatmentQuizTwo} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 3:
        return <Quiz quiz={treatmentQuizThree} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 4:
        return <Summary image="templateLungs" alt="lungs-wide" explanation={`*Relievers help short wind\n*Preventers and combination puffers help reduce swelling and sensitivity in the breathing tubes`} buttonLink="/asthma-list"/>
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

export default AsthmaTreatment;
