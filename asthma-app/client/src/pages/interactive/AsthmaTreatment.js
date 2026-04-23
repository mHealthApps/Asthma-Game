import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import GameHost from '../../components/GameHost';
import { MemoryGame } from '../../games/memory-game/MemoryGame';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';
import IntroCardFooter from '../../components/IntroCardFooter';
import All_Inhalers_23 from '../../assets/images/23_All Inhalers_v2.jpg';
import Toddler_Doctor_17 from '../../assets/images/17_Toddler_Doctor.jpg';
import Asthma_Action_Plan_33 from '../../assets/images/33_Asthma Action Plan.jpg';
import Blue_Inhaler_21 from '../../assets/images/21_Blue Inhaler_v2.jpg';
import Red_Inhaler_20 from '../../assets/images/20_Red Inhaler.jpg';
import Purple_Inhaler_22 from '../../assets/images/22_Purple Inhaler.jpg';
import Lung_32 from '../../assets/images/32_Lung.jpg';
import TealShirt_Girl_Coughing_4 from '../../assets/images/4_TealShirt_Girl_Coughing.jpg';
import Spacer_19 from '../../assets/images/19_Spacer.jpg';
import AudioFile22 from '../../assets/audio/Audio-File-22.mp3';
import AudioFile23 from '../../assets/audio/Audio-File-23.mp3';
import AudioFile24 from '../../assets/audio/Audio-File-24.mp3';
import AudioFile25 from '../../assets/audio/Audio-File-25.mp3';
import AudioFile26 from '../../assets/audio/Audio-File-26.mp3';
import AudioFile27 from '../../assets/audio/Audio-File-27.mp3';
import AudioFile28 from '../../assets/audio/Audio-File-28.mp3';
import AudioFile29 from '../../assets/audio/Audio-File-29.mp3';
import AudioFile30 from '../../assets/audio/Audio-File-30.mp3';
import AudioFile31 from '../../assets/audio/Audio-File-31.mp3';
import AudioFile32 from '../../assets/audio/Audio-File-32.mp3';
import AudioFile33a from '../../assets/audio/Audio-File-33a.mp3';
import AudioFile33b from '../../assets/audio/Audio-File-33b.mp3';
import AudioFile33c from '../../assets/audio/Audio-File-33c.mp3';
import AudioFile33d from '../../assets/audio/Audio-File-33d.mp3';
import AudioFile33e from '../../assets/audio/Audio-File-33e.mp3';
import AudioFile33f from '../../assets/audio/Audio-File-33f.mp3';
import AudioFile33g from '../../assets/audio/Audio-File-33g.mp3';
import AudioFile33h from '../../assets/audio/Audio-File-33h.mp3';
import AudioFile33i from '../../assets/audio/Audio-File-33i.mp3';
import AudioFile34 from '../../assets/audio/Audio-File-34.mp3';
import ReactGA from 'react-ga4';
import { Link } from 'react-router-dom';
import useIsGameMode from '../../hooks/useIsGameMode';


const treatmentCards = [
  {
    audio: AudioFile22,
    image: All_Inhalers_23,
    alt: 'lungs',
    text: <div>
      <h3 className='card-header grid-left'>You will learn:</h3>
      <ul>
        <li className='grid-left'>How asthma is treated</li>
        <li className='grid-left'>How asthma medications work</li>
        <li className='grid-left'>Different types of inhalers used</li>
      </ul>
      <IntroCardFooter />
    </div>,
  },
  {
    audio: AudioFile23,
    image: Toddler_Doctor_17,
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
    audio: AudioFile24,
    image: Asthma_Action_Plan_33,
    alt: 'lungs',
    header: 'HOW DO WE TREAT ASTHMA?',
    text: <div>
      <ul>
        <li className='grid-left'>An <Link to='/resources'>‘Asthma Action Plan’</Link> helps you to know what to do every day, and when your child’s asthma is becoming worse</li>
        <li className='grid-left'>The Doctor may give medication for your child’s asthma</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile25,
    image: Blue_Inhaler_21,
    alt: 'lungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <h3 className='card-sub-header-small'><a href='https://www.lung.org/getmedia/e6be8c67-a793-44a8-bd7c-96629e57c20d/respiratory-medication-chart.pdf' target='_blank' rel="noreferrer">Relievers</a></h3>
      <h3 className='card-treatment-sub-header'>Short-Acting Bronchodilators (SABA)</h3>
      <ul>
        <li className='grid-left'>Work fast</li>
        <li className='grid-left'>Help short breath, cough, and wheeze</li>
        <li className='grid-left'>Always carry your blue inhaler and spacer with you</li>
        <li className='grid-left'>Example - Albuterol, ProAir</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile26,
    image: Red_Inhaler_20,
    alt: 'wide lungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <h3 className='card-sub-header-small'><a href='https://www.lung.org/getmedia/e6be8c67-a793-44a8-bd7c-96629e57c20d/respiratory-medication-chart.pdf' target='_blank' rel="noreferrer">Preventers</a></h3>
      <h3 className='card-treatment-sub-header'>Inhaled Corticosteroids (ICS)</h3>
      <ul>
        <li className='grid-left'>Makes breathing tubes less sensitive</li>
        <li className='grid-left'>Reduces swelling in breathing tubes.</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile27,
    image: Red_Inhaler_20,
    alt: 'wideLungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <h3 className='card-header-small'><a href='https://www.lung.org/getmedia/e6be8c67-a793-44a8-bd7c-96629e57c20d/respiratory-medication-chart.pdf' target='_blank' rel="noreferrer">Preventers</a></h3>
      <ul>
        <li className='grid-left'>Needs to be taken every day</li>
        <li className='grid-left'>Works best when taken for a long time</li>
        <li className='grid-left'>Rinse, gargle, and spit after taking the inhaler</li>
        <li className='grid-left'>Example - Alvesco</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile28,
    image: Purple_Inhaler_22,
    alt: 'lungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <div className='card-header-small'>
        <h3 className='card-sub-header-small'><a href='https://www.lung.org/getmedia/e6be8c67-a793-44a8-bd7c-96629e57c20d/respiratory-medication-chart.pdf' target='_blank' rel="noreferrer">Combination medications</a></h3>
        <div className='card-header-tiny'>(Two medicines mixed together)</div>
      </div>
      <ul>
        <li className='grid-left'>Makes breathing tubes less sensitive</li>
        <li className='grid-left'>Reduces swelling in breathing tubes</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile29,
    image: Purple_Inhaler_22,
    alt: 'lungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <div className='card-header-small'>
        <h3 className='card-sub-header-small'><a href='https://www.lung.org/getmedia/e6be8c67-a793-44a8-bd7c-96629e57c20d/respiratory-medication-chart.pdf' target='_blank' rel="noreferrer">Combination medications</a></h3>
        <div className='card-header-tiny'>(Two medicines mixed together)</div>
      </div>
      <ul>
        <li className='grid-left'>Needs to be taken every day</li>
        <li className='grid-left'>Works best when taken for a long time</li>
        <li className='grid-left'>Rinse, gargle, and spit after taking the inhaler</li>
        <li className='grid-left'>Example - Advair, BREO</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile30,
    image: Spacer_19,
    alt: 'wideLungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
    text: <div>
      <ul>
        <li className='grid-left'>Inhalers need to be used with a spacer so medicines get into the breathing tubes</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile31,
    image: '',
    video: 'https://www.youtube.com/embed/sQUUJHzO-XQ?si=SzyaNjA0gb3vpP5Z',
    videoAudio: AudioFile32,
    text: '',
    alt: 'lungs',
    header: 'HOW DOES ASTHMA MEDICATION WORK?',
  },
]

const treatmentQuizOne = {
  type: 'two-options',
  name: 'Do you know your inhalers?',
  text: <>The reliever inhaler is fast acting<br/>True or False</>,
  options: [
    {
      text: 'True',
      image: '',
    },
    {
      text: 'False',
      image: '',
    },
  ],
  answer: 0,
  index: 'none',
}

const treatmentQuizTwo = {
  type: 'two-options',
  name: 'Do you know your inhalers?',
  text: <>The preventer inhaler is taken every day<br/>True or False</>,
  options: [
    {
      text: 'True',
      image: '',
    },
    {
      text: 'False',
      image: '',
    },
  ],
  answer: 0,
  index: 'none',
}

const treatmentQuizThree = {
  type: 'two-options',
  name: 'Do you know your inhalers?',
  text: <>The combination inhaler is taken best over time<br/>True or False</>,
  options: [
    {
      text: 'True',
      image: '',
    },
    {
      text: 'False',
      image: '',
    },
  ],
  answer: 0,
  index: 2,
}

const treatmentGameContent = [
    {
        alias: 'blue-inhaler',
        src: Blue_Inhaler_21,
        hint: 'This type of inhaler works fast, helping with short breath, coughes, and wheezing'
    }, 
    {
        alias: 'lungs',
        src: Lung_32,
        hint: 'The part of the body that asthma occurs in'
    },
    {
        alias: 'teal-cough', 
        src: TealShirt_Girl_Coughing_4,
        hint: 'This girl is experiencing some asthma symptoms'
    },
    {
        alias: 'red-inhaler', 
        src: Red_Inhaler_20,
        hint: 'This type of inhaler is designed to be taken every day to reduce swelling in the breathing tubes'
    },
    {
        alias: 'purple-inhaler', 
        src: Purple_Inhaler_22,
        hint: 'Is a combination medication designed to be taken every day'
    },
    {
        alias: 'spacer', 
        src: Spacer_19,
        hint: 'Tool designed to be used with an inhaler so medicines get into the breathing tubes'
    },
    {
        alias: 'all-inhalers', 
        src: All_Inhalers_23,
        hint: 'Find the collection of different inhaler types'
    },
    {
        alias: 'toddler-doctor', 
        src: Toddler_Doctor_17,
        hint: 'It is important to take your child for regular check-ups with your doctor or health clinic'
    },
    {
        alias: 'asthma-action-plan',
        src: Asthma_Action_Plan_33,
        hint: 'A doctor written plan that helps you to know what to do every day, and when asthma is becoming worse'
    }
];


const AsthmaTreatment = () => {
  // GA Treatment pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/asthma-treatment', title: 'Cards: Asthma Treatment' });
  }, [])
  // useSendPageview('Content: Asthma Treatment');

  const [isGameMode] = useIsGameMode();

  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    if (isGameMode) {
      switch (scene) {
        case 0:
          return <StackedCards cards={treatmentCards} title="Treatment of asthma" uponCompletion={nextScene} />
        case 1:
          return <GameHost GameClass={MemoryGame} content={treatmentGameContent} storageIndex={2} />
        default:
          return <div>Error: rendering failed</div>
      }
    } else {
      switch (scene) {
        case 0:
          return <StackedCards cards={treatmentCards} title="Treatment of asthma" uponCompletion={nextScene} />
        case 1:
          return <Quiz quiz={treatmentQuizOne} uponCompletion={nextScene} conditionTitle='ASTHMA' image={Blue_Inhaler_21} alt='reliever' audios={[AudioFile33a, AudioFile33b, AudioFile33c]} />
        case 2:
          return <Quiz quiz={treatmentQuizTwo} uponCompletion={nextScene} conditionTitle='ASTHMA' image={Red_Inhaler_20} alt='preventer' audios={[AudioFile33d, AudioFile33e, AudioFile33f]} />
        case 3:
          return <Quiz quiz={treatmentQuizThree} uponCompletion={nextScene} conditionTitle='ASTHMA' image={Purple_Inhaler_22} alt='combination' audios={[AudioFile33g, AudioFile33h, AudioFile33i]} />
        case 4:
          return <Summary image={All_Inhalers_23} alt="lungs-wide" explanation={`*Relievers help short wind\n*Preventers and combination puffers help reduce swelling and sensitivity in the breathing tubes`} buttonLink="/asthma-list" audio={AudioFile34} />
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

export default AsthmaTreatment;
