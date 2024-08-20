import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';


const managementCards = [
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: 'You will learn:\n*When to take your child to the doctor\n*How bad is your child’s asthma?',
  },
  {
    image: 'templateTrain',
    alt: 'template',
    text: 'When he / she\n*Has lots of short breaths\n*Has lots of coughing or wheezing\n*Finds it hard to run and play\n*Wakes up at night with asthma',
    header: 'WHEN SHOULD YOU TAKE YOUR CHILD TO THE DOCTOR OR CLINIC?',
  },
  {
    image: 'templateLungs',
    alt: 'lungs',
    text: '*If he / she needs to use the blue inhaler more than 2 times a week (except for exercise)\n*If he / she misses school because of asthma\n*For regular check-ups',
    header: 'WHEN SHOULD YOU TAKE YOUR CHILD TO THE DOCTOR OR CLINIC?',
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: '*If he / she doesn’t need the blue inhaler more than 2 times a week (except for exercise)\n*If he / she isn’t waking up coughing or wheezing',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
  },
  {
    image: 'templateTrain',
    alt: 'wide lungs',
    text: '*If he / she finds it hard to breathe\n*If he /she uses more of the blue reliever inhaler to help with asthma\n*If he / she has lots of coughing',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
  },
  {
    image: 'templateLungs',
    alt: 'wideLungs',
    text: '*If he / she may have some wheeze\n*If he / she may find it a little harder to talk or cry',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
  },
  {
    image: 'templatePeople',
    alt: 'lungs',
    text: '*Call ambulance 9-1-1 OR go straight to the hospital / emergency department\n*If he / she finds it very hard to breathe\n*If he / she has more coughing ',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
  },
  {
    image: 'templateTrain',
    alt: 'lungs',
    text: '*If he / she has sucking in at the neck and chest or have blue lips\n*If he / she is using a lot more of the blue reliever inhaler\n*If he / she may have a loud wheeze\n*If he / she finds it hard to talk or cry',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
  },
  {
    image: 'templateLungs',
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
      image: 'templatePeople',
      alt: 'lungs',
    },
    {
      text: 'Not waking up coughing or wheezing',
      image: 'templateTrain',
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
      image: 'templatePeople',
      alt: 'lungs',
    },
    {
      text: 'Very hard to breathe and talk. Lot more coughing, maybe with lots of spit',
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
        return <StackedCards cards={managementCards} title="Management" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={managementQuizOne} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 2:
        return <Quiz quiz={managementQuizTwo} uponCompletion={nextScene} conditionTitle='ASTHMA' />
      case 3:
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
