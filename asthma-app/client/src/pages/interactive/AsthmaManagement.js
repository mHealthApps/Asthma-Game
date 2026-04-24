import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import GameHost from '../../components/GameHost';
import { MemoryGame } from '../../games/memory-game/MemoryGame';
import Summary from '../../components/Summary';
import IntroCardFooter from '../../components/IntroCardFooter';
import TealShirt_Girl_Coughing_4 from '../../assets/images/4_TealShirt_Girl_Coughing.jpg';
import OrgShirt_Girl_Bending_2 from '../../assets/images/2_OrgShirt_Girl_Bending.jpg';
import Paper_Good_38 from '../../assets/images/38_Paper_Good.jpg';
import Paper_Meh_39 from '../../assets/images/39_Paper_Meh.jpg';
import Paper_Bad_40 from '../../assets/images/40_Paper_Bad.jpg';
import Toddler_16 from '../../assets/images/16_Toddler.jpg';
import Blue_Inhaler_21 from '../../assets/images/21_Blue Inhaler_v2.jpg';
import Toddler_Doctor_17 from '../../assets/images/17_Toddler_Doctor.jpg';
import Smoker_FastFood_Vog_Pollen_7 from '../../assets/images/7_Smoker_FastFood_Vog_Pollen.jpg';
import AudioFile35 from '../../assets/audio/Audio-File-35.mp3';
import AudioFile36 from '../../assets/audio/Audio-File-36.mp3';
import AudioFile37 from '../../assets/audio/Audio-File-37.mp3';
import AudioFile38 from '../../assets/audio/Audio-File-38.mp3';
import AudioFile39 from '../../assets/audio/Audio-File-39.mp3';
import AudioFile40 from '../../assets/audio/Audio-File-40.mp3';
import AudioFile41 from '../../assets/audio/Audio-File-41.mp3';
import AudioFile42 from '../../assets/audio/Audio-File-42.mp3';
import AudioFile43 from '../../assets/audio/Audio-File-43.mp3';
import AudioFile44 from '../../assets/audio/Audio-File-44.mp3';
import AudioFile44a from '../../assets/audio/Audio-File-44a.mp3'
import AudioFile44b from '../../assets/audio/Audio-File-44b.mp3';
import AudioFile44c from '../../assets/audio/Audio-File-44c.mp3';
import AudioFile44d from '../../assets/audio/Audio-File-44d.mp3';
import AudioFile44e from '../../assets/audio/Audio-File-44e.mp3';
import AudioFile45 from '../../assets/audio/Audio-File-45.mp3';
import ReactGA from 'react-ga4';
import useIsGameMode from '../../hooks/useIsGameMode';


const managementCards = [
  {
    audio: AudioFile35,
    image: TealShirt_Girl_Coughing_4,
    alt: 'lungs',
    text: <div>
      <h3 className='card-header grid-left'>You will learn:</h3>
      <ul>
        <li className='grid-left'>When to take your child to the doctor</li>
        <li className='grid-left'>How bad is your child’s asthma?</li>
      </ul>
      <IntroCardFooter />
    </div>,
  },
  {
    audio: AudioFile36,
    image: OrgShirt_Girl_Bending_2,
    alt: 'template',
    header: 'WHEN SHOULD YOU TAKE YOUR CHILD TO THE DOCTOR OR CLINIC?',
    text: <div>
      <h3 className='card-header-small'>When the child</h3>
      <ul>
        <li className='grid-left'>Has lots of short breaths</li>
        <li className='grid-left'>Has lots of coughing or wheezing</li>
        <li className='grid-left'>Finds it hard to run and play</li>
        <li className='grid-left'>Wakes up at night with asthma</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile37,
    image: TealShirt_Girl_Coughing_4,
    alt: 'lungs',
    header: 'WHEN SHOULD YOU TAKE YOUR CHILD TO THE DOCTOR OR CLINIC?',
    text: <div>
      <ul>
        <li className='grid-left'>If the child needs to use the blue inhaler more than 2 times a week (except for exercise)</li>
        <li className='grid-left'>If the child misses school because of asthma</li>
        <li className='grid-left'>For regular check-ups</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile38,
    image: Paper_Good_38,
    alt: 'lungs',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
    text: <div>
      <ul>
        <li className='grid-left'>If the child doesn’t need the blue inhaler more than 2 times a week (except for exercise)</li>
        <li className='grid-left'>If the child isn’t waking up coughing or wheezing</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile39,
    image: Paper_Meh_39,
    alt: 'wide lungs',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
    text: <div>
      <ul>
        <li className='grid-left'>If the child finds it hard to breathe</li>
        <li className='grid-left'>If the child uses more of the blue reliever inhaler to help with asthma</li>
        <li className='grid-left'>If the child has lots of coughing</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile40,
    image: Paper_Meh_39,
    alt: 'wideLungs',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
    text: <div>
      <ul>
        <li className='grid-left'>If the child may have some wheeze</li>
        <li className='grid-left'>If the child may find it a little harder to talk or cry</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile41,
    image: Paper_Bad_40,
    alt: 'lungs',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
    text: <div>
      <ul>
        <li className='grid-left'><b>Call ambulance 9-1-1 OR go straight to the hospital / emergency department</b></li>
        <li className='grid-left'>If the child finds it very hard to breathe</li>
        <li className='grid-left'>If the child has more coughing</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile42,
    image: Paper_Bad_40,
    alt: 'lungs',
    header: `HOW BAD IS YOUR CHILD'S ASTHMA?`,
    text: <div>
      <ul>
        <li className='grid-left'><b>If the child has sucking in at the neck and chest or have blue lips</b></li>
        <li className='grid-left'>If the child is using a lot more of the blue reliever inhaler</li>
        <li className='grid-left'>If the child may have a loud wheeze</li>
        <li className='grid-left'>If the child finds it hard to talk or cry</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile43,
    image: Toddler_16,
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
      text: 'May have loud wheeze. They may have sucking in at the neck and chest and blue lips',
      image: Blue_Inhaler_21,
      alt: 'lungs',
    },
    {
      text: 'Not waking up coughing or wheezing',
      image: OrgShirt_Girl_Bending_2,
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
      image: Blue_Inhaler_21,
      alt: 'lungs',
    },
    {
      text: 'Very hard to breathe and talk. Lot more coughing, maybe with lots of spit',
      image: OrgShirt_Girl_Bending_2,
      alt: 'template',
    },
  ],
  answer: 0,
  index: 3,
}

const managementGameContent = [
    {
        alias: 'blue-inhaler',
        src: Blue_Inhaler_21,
        hint: 'If your child uses this more than twice a week you should take them to the doctor'
    }, 
    {
        alias: 'org-shirt',
        src: OrgShirt_Girl_Bending_2,
        hint: 'This girl is experiencing some asthma symptoms'
    },
    {
        alias: 'teal-cough', 
        src: TealShirt_Girl_Coughing_4,
        hint: 'This girl is experiencing some asthma symptoms'
    },
    {
        alias: 'paper-good', 
        src: Paper_Good_38,
        hint: `If the child doesn't need the blue inhaler more than 2 times a week and isn't waking up coughing or wheezing`
    },
    {
        alias: 'paper-meh', 
        src: Paper_Meh_39,
        hint: 'If the child uses more of the blue reliever inhaler to help with asthma and has lots of coughing'
    },
    {
        alias: 'paper-bad', 
        src: Paper_Bad_40,
        hint: 'If the child finds it very hard to breathe or has sucking in at the neck and chest or have blue lips'
    },
    {
        alias: 'smoker-triggers', 
        src: Smoker_FastFood_Vog_Pollen_7,
        hint: 'These things can be asthma triggers for the child'
    },
    {
        alias: 'toddler-doctor', 
        src: Toddler_Doctor_17,
        hint: 'It is important to take your child for regular check-ups with your doctor or health clinic'
    },
];


const AsthmaManagement = () => {
  // GA Management pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/asthma-management', title: 'Cards: Asthma Management' });
  }, [])
  // useSendPageview('Content: Asthma Management');

  const [isGameMode] = useIsGameMode();

  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    if (isGameMode) {
      switch (scene) {
        case 0:
          return <StackedCards cards={managementCards} title="Management of asthma" uponCompletion={nextScene} />
        case 1:
          return <GameHost GameClass={MemoryGame} content={managementGameContent} storageIndex={3} />
        default:
          return <div>Error: rendering failed</div>
      }
    } else {
      switch (scene) {
        case 0:
          return <StackedCards cards={managementCards} title="Management of asthma" uponCompletion={nextScene} />
        case 1:
          return <Quiz quiz={managementQuizOne} uponCompletion={nextScene} conditionTitle='ASTHMA' audios={[AudioFile44, AudioFile44a, AudioFile44b]} />
        case 2:
          return <Quiz quiz={managementQuizTwo} uponCompletion={nextScene} conditionTitle='ASTHMA' audios={[AudioFile44c, AudioFile44d, AudioFile44e]} />
        case 3:
          return <Summary image={TealShirt_Girl_Coughing_4} alt="lungs-wide" explanation={`Your child's asthma is under control if:\n*You don't need to use blue reliever puffer more than 2 times a week\n*Not waking up coughing or wheezing`} buttonLink="/asthma-list" audio={AudioFile45} />
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

export default AsthmaManagement;
