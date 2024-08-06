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
}


const HealthyLifestyle = () => {
  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={aboutAsthmaCards} title="Keeping a Healthy Lifestyle" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={aboutAsthmaQuiz} uponCompletion={nextScene} />
      case 2:
        return <Summary image="templateLungs" alt="lungs-wide" explanation={`Keep your child's lungs healthy. Don't let asthma control your child's life`} buttonLink="/asthma-list"/>
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
