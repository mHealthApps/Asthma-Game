import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import GameHost from '../../components/GameHost';
import { GateGame } from '../../games/gate-game/GateGame';
import Summary from '../../components/Summary';
import IntroCardFooter from '../../components/IntroCardFooter';
import Lungs_Anatomy_25 from '../../assets/images/25_Lungs_Anatomy.jpg';
import WhiteShirt_Girl_Lungs_10 from '../../assets/images/10_WhiteShirt_Girl_Lungs.jpg';
import Lungs_Text_1_26 from '../../assets/images/26_Lungs_Text 1.jpg';
import Lungs_Text_2_27 from '../../assets/images/27_Lungs_Text 2.jpg';
import Lung_Tree_31 from '../../assets/images/31_Lung_Tree.jpg';
import Lungs_Oxygen_28 from '../../assets/images/28_Lungs_Oxygen.jpg';
import Lungs_Oxygen_Animation_29 from '../../assets/videos/29_Lungs_O + CO2_Animation.mp4';
import Lungs_Oxygen_Animation_30 from '../../assets/videos/30_Lungs_Oxygen_Animation.mp4';
import AudioFile1 from '../../assets/audio/Audio-File-1.mp3';
import AudioFile2 from '../../assets/audio/Audio-File-2.mp3';
import AudioFile3 from '../../assets/audio/Audio-File-3.mp3';
import AudioFile4 from '../../assets/audio/Audio-File-4.mp3';
import AudioFile5 from '../../assets/audio/Audio-File-5.mp3';
import AudioFile6 from '../../assets/audio/Audio-File-6.mp3';
import AudioFile7 from '../../assets/audio/Audio-File-7.mp3';
import AudioFile8 from '../../assets/audio/Audio-File-8.mp3';
import AudioFile9 from '../../assets/audio/Audio-File-9.mp3';
import AudioFile9a from '../../assets/audio/Audio-File-9a.mp3';
import AudioFile9b from '../../assets/audio/Audio-File-9b.mp3';
import AudioFile10 from '../../assets/audio/Audio-File-10.mp3';
import ReactGA from 'react-ga4';
import useIsGameMode from '../../hooks/useIsGameMode';


const lungsCards = [
  {
    audio: AudioFile1,
    image: Lungs_Anatomy_25,
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
    audio: AudioFile2,
    image: WhiteShirt_Girl_Lungs_10,
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
    audio: AudioFile3,
    image: Lungs_Text_1_26,
    alt: 'lungs',
    header: 'THE LUNGS',
    text: <div>
      When we breathe in, air enters our body as oxygen. The air is breathed in through our mouth or nose and travels down into our lungs through our windpipe.
    </div>,
  },
  {
    audio: AudioFile4,
    image: Lungs_Text_2_27,
    alt: 'lungs',
    header: 'THE LUNGS',
    text: <div>
      The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.
    </div>,
  },
  {
    audio: AudioFile5,
    image: Lung_Tree_31,
    alt: 'wide lungs',
    header: 'THE LUNGS',
    text: <div>
      The smaller air tubes inside the lungs look like the branches of an upside down tree. At the end of the small air tubes or branches, are lots of tiny air sacs called alveoli.
    </div>,
  },
  {
    audio: AudioFile6,
    image: Lung_Tree_31,
    alt: 'wideLungs',
    header: 'THE LUNGS',
    text: <div>
      The air sacs (alveoli) have an important job of giving the good air <div className='asthma-blue'>(oxygen)</div> to our blood and taking the used air <div className='asthma-orange'>(carbon dioxide)</div> out.
    </div>,
  },
  {
    audio: AudioFile7,
    image: 'animation',
    animation: Lungs_Oxygen_Animation_29,
    alt: 'lungs',
    header: 'THE LUNGS',
    text: <div>
      We breathe in good air called <div className='asthma-blue'>oxygen</div> and we breathe out used air called <div className='asthma-orange'>carbon dioxide</div>
    </div>,
  },
  {
    audio: AudioFile8,
    image: 'animation',
    animation: Lungs_Oxygen_Animation_30,
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
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/the-lungs', title: 'Cards: The Lungs' });
  }, [])
  // useSendPageview('Content: The Lungs');

  const [isGameMode] = useIsGameMode();

  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    if (isGameMode) {
      switch (scene) {
        case 0:
          return <StackedCards cards={lungsCards} title="The Lungs" uponCompletion={nextScene} />
        case 1:
          return <GameHost GameClass={GateGame} content='the lungs content placeholder' storageIndex={0} />
        default:
          return <div>Error: rendering failed</div>
      }
    } else {
      switch (scene) {
        case 0:
          return <StackedCards cards={lungsCards} title="The Lungs" uponCompletion={nextScene} />
        case 1:
          return <Quiz quiz={lungsQuiz} uponCompletion={nextScene} conditionTitle='ASTHMA' animation={Lungs_Oxygen_Animation_30} alt='lungs' audios={[AudioFile9, AudioFile9a, AudioFile9b]} />
        case 2:
          return <Summary image={Lungs_Oxygen_28} alt="lungs-wide" explanation="Oxygen helps our body to function properly. We need around 432 litres of oxygen per day." buttonLink="/asthma-list" audio={AudioFile10} />
        default:
          return <div>Error: rendering failed</div>
      }
    }
    
  }

  return (
    <div className="asthma-background">
      { renderScene() }
    </div>
  );
}

export default TheLungs;
