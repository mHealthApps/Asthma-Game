import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';
import IntroCardFooter from '../../components/IntroCardFooter';
import templateLungs from '../../assets/images/lungs-640.jpg';
import templateTrain from '../../assets/images/template-train.jpg';
import templatePeople from '../../assets/images/template-people.jpg';
import templateBeep from '../../assets/audio/template-beep.mp3';
import templateConversation from '../../assets/audio/template-conversation.mp3';
import useSendPageview from '../../hooks/useSendPageview';


const lungsCards = [
  {
    audio: templateConversation,
    image: templateLungs,
    alt: 'lungs',
    text: <div>
      <h3 className='card-header grid-left'>You will learn:</h3>
      <ul>
        <li className='grid-left'>What your lungs do</li>
        <li className='grid-left'>How your lungs work</li>
      </ul>
      <IntroCardFooter />
    </div>,

  },
  {
    audio: templateBeep,
    image: templateTrain,
    alt: 'template',
    header: 'THE LUNGS',
    text: <div>
      <ul>
        <li className='grid-left'>You have two lungs</li>
        <li className='grid-left'>They sit in your chest</li>
        <li className='grid-left'>They have an important job in your body</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: templateLungs,
    alt: 'lungs',
    header: 'THE LUNGS',
    text: <div>
      When we breathe in, air enters our body as oxygen. The air is breathed in through our mouth or nose and travels down into our lungs through our windpipe.
    </div>,
  },
  {
    audio: templateBeep,
    image: templatePeople,
    alt: 'lungs',
    header: 'THE LUNGS',
    text: <div>
      The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.
    </div>,
  },
  {
    audio: templateBeep,
    image: templateTrain,
    alt: 'wide lungs',
    header: 'THE LUNGS',
    text: <div>
      The smaller air tubes inside the lungs look like the branches of an upside down tree. At the end of the small air tubes or branches, are lots of tiny air sacs called alveoli.
    </div>,
  },
  {
    audio: templateBeep,
    image: templateLungs,
    alt: 'wideLungs',
    header: 'THE LUNGS',
    text: <div>
      The air sacs (alveoli) have an important job of giving the good air <div className='asthma-blue'>(oxygen)</div> to our blood and taking the used air <div className='asthma-orange'>(carbon dioxide)</div> out.
    </div>,
  },
  {
    audio: templateBeep,
    image: templatePeople,
    alt: 'lungs',
    header: 'THE LUNGS',
    text: <div>
      We breathe in good air called <div className='asthma-blue'>oxygen</div> and we breathe out used air called <div className='asthma-orange'>carbon dioxide</div>
    </div>,
  },
  {
    audio: templateBeep,
    image: templateTrain,
    alt: 'lungs',
    header: 'THE LUNGS',
    text: <div>
      <div className='asthma-blue'>Oxygen</div> gives our body energy to work properly.
    </div>,
  },
]

const lungsQuiz = {
  type: 'two-options',
  name: 'THIS OR THAT',
  text: `Is oxygen important for our body?`,
  options: [
    {
      text: 'Yes',
      image: '',
    },
    {
      text: 'No',
      image: '',
    },
  ],
  answer: 0,
  index: 0,
}


const TheLungs = () => {
  // GA Lungs pageview
  useSendPageview();

  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={lungsCards} title="The Lungs" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={lungsQuiz} uponCompletion={nextScene} conditionTitle='ASTHMA' image={templateLungs} alt='lungs' />
      case 2:
        return <Summary image={templateLungs} alt="lungs-wide" explanation="Oxygen helps our body to function properly. We need around 432 litres of oxygen per day." buttonLink="/asthma-list" />
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
