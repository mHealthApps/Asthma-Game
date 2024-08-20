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
    text: 'You will learn:\n*What is asthma?\n*What happens in an asthma attack?\n*Signs and symptoms of asthma',
  },
  {
    image: 'templateTrain',
    alt: 'template',
    text: '*Asthma is a chronic lung sickness\n*People with asthma have sensitive airways.\n*Different triggers can cause you to have an asthma attack.',
    header: 'WHAT IS ASTHMA?',
  },
  {
    image: 'templateLungs',
    alt: 'lungs',
    text: '*Anyone can get asthma\n*We don’t know what causes asthma\n*It is often in families with allergies.\n*It can’t be cured but it can be looked after.',
    header: 'WHAT CAUSES ASTHMA?',
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: '*Normal breathing tube is clear and open for easy breathing',
    header: 'A NORMAL BREATHING TUBE',
  },
  {
    image: 'templateTrain',
    alt: 'wide lungs',
    text: '*Hard for air to be breathed in and out through the narrowed tube',
    header: 'ASTHMA BREATHING TUBE',
  },
  {
    image: 'templateLungs',
    alt: 'wideLungs',
    text: '*Short breath and get tired easily\n*Wheezing sound when they breathe\n*Feeling tight in the chest/hard to breathe\n*And find it hard to talk',
    header: 'SIGNS AND SYMPTOMS OF ASTHMA',
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: '*Animal hair (dogs and cats)\n*Some cleaning products and strong smells\n*Cold night air or weather changes.\n*VOG',
    header: 'TRIGGERS FOR ASTHMA IN CHILDREN',
  },
  {
    image: 'templateTrain',
    alt: 'lungs',
    text: '*Pollen from trees, plants and flower\n*Too much takeaway food\n*Cigarette smoke / campfire / BBQ smoke / smoke from fireworks and firecrackers',
    header: 'TRIGGERS FOR ASTHMA IN CHILDREN',
  },
  {
    image: 'templateLungs',
    alt: 'wideLungs',
    text: '*Dust mites in bedding\n*Cockroach drippings\n*Active play or sports\n*Colds and chest infection',
    header: 'TRIGGERS FOR ASTHMA IN CHILDREN',
  },
]

const aboutAsthmaQuiz = {
  type: 'two-options',
  name: 'YES OR NO',
  text: `What is asthma?`,
  options: [
    {
      text: 'Kidney Condition',
      image: 'templatePeople',
      alt: 'lungs',
    },
    {
      text: 'Brain Condition',
      image: 'templateTrain',
      alt: 'template',
    },
    {
      text: 'Heart Condition',
      image: 'templatePeople',
      alt: 'lungs',
    },
    {
      text: 'Lung Condition',
      image: 'templateTrain',
      alt: 'template',
    },
  ],
  answer: 3,
  index: 1,
}


const AboutAsthma = () => {
  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={aboutAsthmaCards} title="About asthma" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={aboutAsthmaQuiz} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 2:
        return <Summary image="templateLungs" alt="lungs-wide" explanation={`*Asthma is a chronic lung sickness\n*In Asthma, your breathing tubes are sensitive\n*Different triggers cause Asthma`} buttonLink="/asthma-list"/>
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

export default AboutAsthma;
