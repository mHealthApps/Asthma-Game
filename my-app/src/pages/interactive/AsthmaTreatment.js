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
    text: <div>
      <h3 className='card-header grid-left'>You will learn:</h3>
      <ul>
        <li className='grid-left'>How asthma is treated</li>
        <li className='grid-left'>How asthma medications work</li>
        <li className='grid-left'>Different types of inhalers used</li>
      </ul>
      <hr/>
    </div>,
  },
  {
    image: 'templateTrain',
    alt: 'template',
    header: 'TREATMENT OF ASTHMA',
    text: <div>
      <ul>
        <li className='grid-left'>It is important to take your child for regular check-ups with your doctor or health clinic</li>
        <li className='grid-left'>The Doctor will write an “Asthma Action Plan”</li>
      </ul>
    </div>,
  },
  {
    image: 'templateLungs',
    alt: 'lungs',
    header: 'HOW DO WE TREAT ASTHMA?',
    text: <div>
      <ul>
        <li className='grid-left'>An ‘Asthma Action Plan’ helps you to know what to do every day, and when your child’s asthma is becoming worse</li>
        <li className='grid-left'>The Doctor may give medication for your child’s asthma</li>
      </ul>
    </div>,
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <h3 className='card-header-small'>Relievers</h3>
      <ul>
        <li className='grid-left'>Work fast</li>
        <li className='grid-left'>Help short breath, cough, and wheeze</li>
        <li className='grid-left'>Always carry your blue inhaler and spacer with you</li>
      </ul>
    </div>,
  },
  {
    image: 'templateTrain',
    alt: 'wide lungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <h3 className='card-header-small'>Preventers</h3>
      <ul>
        <li className='grid-left'>Makes breathing tubes less sensitive</li>
        <li className='grid-left'>Reduces swelling in breathing tubes.</li>
      </ul>
    </div>,
  },
  {
    image: 'templateLungs',
    alt: 'wideLungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <h3 className='card-header-small'>Preventers</h3>
      <ul>
        <li className='grid-left'>Needs to be taken every day</li>
        <li className='grid-left'>Works best when taken for a long time</li>
        <li className='grid-left'>Rinse, gargle, and spit after taking the inhaler</li>
      </ul>
    </div>,
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <div className='card-header-small'>
        <h3 className='card-sub-header-small'>Combination medications</h3>
        <div className='card-header-tiny'>(Two medicines mixed together)</div>
      </div>
      <ul>
        <li className='grid-left'>Makes breathing tubes less sensitive</li>
        <li className='grid-left'>Reduces swelling in breathing tubes</li>
      </ul>
    </div>,
  },
  {
    image: 'templateTrain',
    alt: 'lungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <div className='card-header-small'>
        <h3 className='card-sub-header-small'>Combination medications</h3>
        <div className='card-header-tiny'>(Two medicines mixed together)</div>
      </div>
      <ul>
        <li className='grid-left'>Needs to be taken every day</li>
        <li className='grid-left'>Works best when taken for a long time</li>
        <li className='grid-left'>Rinse, gargle, and spit after taking the inhaler</li>
      </ul>
    </div>,
  },
  {
    image: 'templateLungs',
    alt: 'wideLungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <ul>
        <li className='grid-left'>Inhalers need to be used with a spacer so medicines get into the breathing tubes</li>
      </ul>
    </div>,
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
