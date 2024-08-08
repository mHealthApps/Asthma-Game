import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';


const aboutAsthmaCards = [
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: 'Filler text for Asthma cards',
  },
  {
    image: 'templateTrain',
    alt: 'template',
    text: 'Filler text for Asthma cards',
  },
  {
    image: 'templateLungs',
    alt: 'lungs',
    text: 'Filler text for Asthma cards',
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: 'Filler text for Asthma cards',
  },
  {
    image: 'templateTrain',
    alt: 'wide lungs',
    text: 'Filler text for Asthma cards',
  },
  {
    image: 'templateLungs',
    alt: 'wideLungs',
    text: 'Filler text for Asthma cards',
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: 'Filler text for Asthma cards',
  },
  {
    image: 'templateTrain',
    alt: 'lungs',
    text: 'Filler text for Asthma cards',
  },
  {
    image: 'templateLungs',
    alt: 'wideLungs',
    text: 'Filler text for Asthma cards',
  },
]

const aboutAsthmaQuiz = {
  type: 'two-options',
  name: 'THIS OR THAT',
  text: `Is oxygen important for our body?`,
  options: [
    {
      text: 'Yes',
      image: 'templatePeople',
      alt: 'lungs',
    },
    {
      text: 'No',
      image: 'templateTrain',
      alt: 'template',
    },
  ],
  answer: 0,
  index: 3,
}


const AsthmaManagement = () => {
  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={aboutAsthmaCards} title="Management" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={aboutAsthmaQuiz} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 2:
        return <Summary image="templateLungs" alt="lungs-wide" explanation={`Your child's asthma is under control if:\n*You don't need to use blue reliever puffer more than 2 times a week\n*Not waking up coughing or wheezing`} buttonLink="/asthma-list"/>
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

export default AsthmaManagement;
