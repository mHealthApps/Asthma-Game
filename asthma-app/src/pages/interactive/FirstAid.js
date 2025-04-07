import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';
import IntroCardFooter from '../../components/IntroCardFooter';
import TealShirt_Girl_Coughing_4 from '../../assets/images/4_TealShirt_Girl_Coughing.jpg';
import OrgShirt_Girl_Sitting_5 from '../../assets/images/5_OrgShirt_Girl_Sitting.jpg';
import BlueShirt_Boy_Spacer_3 from '../../assets/images/3_BlueShirt_Boy_Spacer_v2.jpg';
import Clock_35 from '../../assets/images/35_Clock.jpg';
import Ambulance_36 from '../../assets/images/36_Ambulance.jpg';
import WhiteShirt_Girl_Lungs_10 from '../../assets/images/10_WhiteShirt_Girl_Lungs.jpg';
import Spacer_19 from '../../assets/images/19_Spacer.jpg';
import AudioFile46 from '../../assets/audio/Audio-File-46.mp3';
import AudioFile47 from '../../assets/audio/Audio-File-47.mp3';
import AudioFile48 from '../../assets/audio/Audio-File-48.mp3';
import AudioFile49 from '../../assets/audio/Audio-File-49.mp3';
import AudioFile50 from '../../assets/audio/Audio-File-50.mp3';
import AudioFile51 from '../../assets/audio/Audio-File-51.mp3';
import AudioFile52 from '../../assets/audio/Audio-File-52.mp3';
import AudioFile53 from '../../assets/audio/Audio-File-53.mp3';
import AudioFile53a from '../../assets/audio/Audio-File-53a.mp3';
import AudioFile53b from '../../assets/audio/Audio-File-53b.mp3';
import AudioFile53c from '../../assets/audio/Audio-File-53c.mp3';
import AudioFile53d from '../../assets/audio/Audio-File-53d.mp3';
import AudioFile53e from '../../assets/audio/Audio-File-53e.mp3';
import AudioFile53f from '../../assets/audio/Audio-File-53f.mp3';
import AudioFile53g from '../../assets/audio/Audio-File-53g.mp3';
import AudioFile53h from '../../assets/audio/Audio-File-53h.mp3';
import AudioFile53i from '../../assets/audio/Audio-File-53i.mp3';
import AudioFile53j from '../../assets/audio/Audio-File-53j.mp3';
import AudioFile53k from '../../assets/audio/Audio-File-53k.mp3';
import AudioFile54 from '../../assets/audio/Audio-File-54.mp3';
import ReactGA from 'react-ga4';


const firstAidCards = [
  {
    audio: AudioFile46,
    image: TealShirt_Girl_Coughing_4,
    alt: 'lungs',
    text: <div>
      <h3 className='card-header grid-left'>You will learn:</h3>
      <ul>
        <li className='grid-left'>The four steps in an asthma emergency (asthma attack)</li>
        <li className='grid-left'>What to do when asthma does not get better</li>
      </ul>
      <IntroCardFooter />
    </div>,
  },
  {
    audio: AudioFile47,
    image: OrgShirt_Girl_Sitting_5,
    alt: 'template',
    header: 'FIRST AID EMERGENCY: STEP 1',
    text: <div>
      <ul>
        <li className='grid-left'>Sit your child up</li>
        <li className='grid-left'>Stay calm</li>
        <li className='grid-left'>Do not leave your child</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile48,
    image: BlueShirt_Boy_Spacer_3,
    alt: 'lungs',
    header: 'FIRST AID EMERGENCY: STEP 2',
    text: <div>
      <ul>
        <li className='grid-left'>Shake the blue inhaler</li>
        <li className='grid-left'>Put 1 puff into the spacer</li>
        <li className='grid-left'>Get the child to take 4 breaths from the spacer</li>
      </ul>
      <b>
        <div>REPEAT THE STEPS 4 TIMES.</div>
        <div>
          <div className='asthma-orange'>REMEMBER, SHAKE..2 PUFF..4 BREATHS</div>
        </div>
      </b>
    </div>,
  },
  {
    audio: AudioFile49,
    image: Clock_35,
    alt: 'lungs',
    header: 'FIRST AID EMERGENCY: STEP 3',
    text: <div>
      <ul>
        <li className='grid-left'>Wait 4 minutes</li>
        <li className='grid-left'>If no improvement, repeat Step 2</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile50,
    image: Ambulance_36,
    alt: 'wide lungs',
    header: 'FIRST AID EMERGENCY: STEP 4',
    text: <div>
      <ul>
        <li className='grid-left'>If not getting better, call 9-1-1 and ask for an ambulance</li>
        <li className='grid-left'>Tell the 9-1-1 operator or the clinic that “someone is having an asthma attack”</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile51,
    image: Ambulance_36,
    alt: 'wideLungs',
    header: 'FIRST AID EMERGENCY: STEP 4',
    text: <div>
      <ul>
        <li className='grid-left'>They will tell you what to do</li>
        <li className='grid-left'>Keep giving 4 separate puffs or the blue inhaler every 4 minutes until help arrives</li>
      </ul>
    </div>,
  },
  {
    audio: AudioFile52,
    image: OrgShirt_Girl_Sitting_5,
    alt: 'lungs',
    text: '',
    header: 'FIRST AID EMERGENCY',
  },
]

const firstAidQuizOne = {
  type: 'two-options',
  name: 'TRUE OR FALSE',
  text: `Step 1 is if not getting better call 9-1-1`,
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
  answer: 1,
  index: 'none',
}

const firstAidQuizTwo = {
  type: 'two-options',
  name: 'TRUE OR FALSE',
  text: `Step 2 Shake the blue inhaler, put 1 puff into the spacer, take 4 breaths from the spacer`,
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

const firstAidQuizThree = {
  type: 'two-options',
  name: 'TRUE OR FALSE',
  text: `Step 3 is to wait 4 minutes, if no improvement repeat step 2`,
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

const firstAidQuizFour = {
  type: 'two-options',
  name: 'TRUE OR FALSE',
  text: `Step 4 is to sit your child up`,
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
  answer: 1,
  index: 4,
}


const FirstAid = () => {
  // GA FirstAid pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/first-aid', title: 'Cards: First Aid Emergency' });
  }, [])
  // useSendPageview('Content: First Aid Emergency');

  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  }

  const renderScene = () => {
    switch (scene) {
      case 0:
        return <StackedCards cards={firstAidCards} title="First Aid Emergency for asthma" uponCompletion={nextScene} />
      case 1:
        return <Quiz quiz={firstAidQuizOne} uponCompletion={nextScene} conditionTitle='ASTHMA' image={Ambulance_36} audios={[AudioFile53, AudioFile53b, AudioFile53a]} />
      case 2:
        return <Quiz quiz={firstAidQuizTwo} uponCompletion={nextScene} conditionTitle='ASTHMA' image={Spacer_19} audios={[AudioFile53c, AudioFile53d, AudioFile53e]}/>
      case 3:
        return <Quiz quiz={firstAidQuizThree} uponCompletion={nextScene} conditionTitle='ASTHMA' image={Clock_35} audios={[AudioFile53f, AudioFile53g, AudioFile53h]} />
      case 4:
        return <Quiz quiz={firstAidQuizFour} uponCompletion={nextScene} conditionTitle='ASTHMA' image={OrgShirt_Girl_Sitting_5} audios={[AudioFile53i, AudioFile53k, AudioFile53j]} />
      case 5:
        return <Summary image={WhiteShirt_Girl_Lungs_10} alt="lungs-wide" explanation={`It's important to know the Asthma First Aid Emergency steps`} buttonLink="/asthma-list" audio={AudioFile54} />
      default:
        return <div>Error: rendering failed</div>
    }
  }

  return (
    <div className="asthma-background">
      { renderScene() }
    </div>
  );
}

export default FirstAid;
