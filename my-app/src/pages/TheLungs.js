import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import StackedCards from '../components/StackedCards';
import Quiz from '../components/Quiz';
import Summary from '../components/Summary';


const lungsCards = [
  {
    image: 'lungs',
    alt: 'lungs',
    text: 'You will learn:\n* What your lungs do\n* How your lungs work',
  },
  {
    image: 'newRatio',
    alt: 'template',
    text: '* You have two lungs\n* They sit in your chest\n*They have an important job in your body',
  },
  {
    image: 'lungs',
    alt: 'lungs',
    text: 'When we breathe in, air enters our body as oxygen. The air is breathed in through our mouth or nose and travels down into our lungs through our windpipe.',
  },
  {
    image: 'lungs',
    alt: 'lungs',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: 'lungsWide',
    alt: 'wide lungs',
    text: 'The smaller air tubes inside the lungs look like the branches of an upside down tree. At the end of the small air tubes or branches, are lots of tiny air sacs called alveoli.',
  },
  {
    image: 'lungsWide',
    alt: 'wideLungs',
    text: 'The air sacs (alveoli) have an important job of giving the good air (oxygen) to our blood and taking the used air (carbon dioxide) out.',
  },
  {
    image: 'lungs',
    alt: 'lungs',
    text: 'We breathe in good air called oxygen and we breathe out used air called carbon dioxide',
  },
  {
    image: 'lungs',
    alt: 'lungs',
    text: 'Oxygen gives our body energy to work properly.',
  },
]

const lungsQuiz = {
  type: 'two-options',
  name: 'THIS OR THAT',
  text: `Is oxygen important for our body?`,
  options: [
    {
      text: 'Yes',
      image: 'lungs',
      alt: 'lungs',
    },
    {
      text: 'No',
      image: 'newRatio',
      alt: 'template',
    },
  ],
  answer: 0,
}


const TheLungs = () => {
  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }
  /*const prevScene = () => {
    setScene(scene - 1);
  }*/

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={lungsCards} title="The Lungs" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={lungsQuiz} uponCompletion={nextScene} />
      case 2:
        return <Summary image="lungsWide" alt="lungs-wide" explanation="Oxygen helps our body to function properly. We need around 432 litres of oxygen per day." buttonLink="/list-page"/>
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

export default TheLungs;
