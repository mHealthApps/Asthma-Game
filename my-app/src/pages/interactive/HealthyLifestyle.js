import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';


const healthyLifestyleCards = [
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: 'You will learn:\n*How to keep your child’s lungs healthy\n*Keeping your child well',
  },
  {
    image: 'templateTrain',
    alt: 'template',
    text: '*Take your child for regular check-ups with your doctor or health clinic\n*Keep up to date with vaccinations and yearly flu shot',
  },
  {
    image: 'templateLungs',
    alt: 'lungs',
    text: '*Give the blue reliever inhaler when your child has short breath\n*Give your child the preventer inhaler every day as ordered by your doctor',
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: '*Breast feed your baby\n*Give your child plenty of good food\n*Encourage your child to run and play\n*Keep your child away from smoke such as cigarette, campfire smoke, bbq',
  },
  {
    image: 'templateTrain',
    alt: 'wide lungs',
    text: '*Anyone can have asthma at any age\n*If your child has asthma, it can be well controlled by following your child’s Asthma Action Plan\n*Talk story with your health care provider',
  },
  {
    image: 'templateLungs',
    alt: 'wideLungs',
    text: '',
  },
]

const healthyLifestyleQuizOne = {
  type: 'two-options',
  name: 'YES OR NO',
  text: `Will this keep your lungs Healthy?`,
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
        return <Quiz quiz={healthyLifestyleQuizOne} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 2:
        return <Quiz quiz={healthyLifestyleQuizTwo} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 3:
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
