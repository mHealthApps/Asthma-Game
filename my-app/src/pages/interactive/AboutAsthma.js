import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import StackedCards from '../../components/StackedCards';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';
import IntroCardFooter from '../../components/IntroCardFooter';
import OrgShirt_Girl_Bending_2 from '../../assets/images/2_OrgShirt_Girl_Bending.jpg';
import WhiteShirt_Girl_Lungs_10 from '../../assets/images/10_WhiteShirt_Girl_Lungs.jpg';
import TealShirt_Girl_Coughing_4 from '../../assets/images/4_TealShirt_Girl_Coughing.jpg';
import WhiteShirt_Lungs_Tube_11 from '../../assets/images/11_WhiteShirt_Girl_Lungs_Tube.jpg';
import Dog_Weather_Cleaning_24 from '../../assets/images/24_Dog_Weather_Cleaning.jpg';
import Smoker_FastFood_Vog_Pollen_7 from '../../assets/images/7_Smoker_FastFood_Vog_Pollen.jpg';
import TealShirt_Girl_Sports_Mites_18 from '../../assets/images/18_TealShirt_Girl_Sports_Mites.jpg';
import Brain_13 from '../../assets/images/13_Brain.jpg';
import Heart_14 from '../../assets/images/14_Heart.jpg';
import Kidney_15 from '../../assets/images/15_Kidney.jpg';
import Lung_32 from '../../assets/images/32_Lung.jpg';
import templateBeep from '../../assets/audio/template-beep.mp3';
import useSendPageview from '../../hooks/useSendPageview';


const aboutAsthmaCards = [
  {
    audio: templateBeep,
    image: OrgShirt_Girl_Bending_2,
    alt: 'lungs',
    text: <div>
      <h3 className='card-header grid-left'>You will learn:</h3>
      <ul>
        <li className='grid-left'>What is asthma?</li>
        <li className='grid-left'>What happens in an asthma attack?</li>
        <li className='grid-left'>Signs and symptoms of asthma</li>
      </ul>
      <IntroCardFooter />
    </div>,
  },
  {
    audio: templateBeep,
    image: WhiteShirt_Girl_Lungs_10,
    alt: 'template',
    header: 'WHAT IS ASTHMA?',
    text: <div>
      <ul>
        <li className='grid-left'>Asthma is a chronic lung sickness</li>
        <li className='grid-left'>People with asthma have sensitive airways.</li>
        <li className='grid-left'>Different triggers can cause you to have an asthma attack.</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: TealShirt_Girl_Coughing_4,
    alt: 'lungs',
    header: 'WHAT CAUSES ASTHMA?',
    text: <div>
      <ul>
        <li className='grid-left'>Anyone can get asthma</li>
        <li className='grid-left'>We don’t know what causes asthma</li>
        <li className='grid-left'>It is often in families with allergies.</li>
        <li className='grid-left'>It can’t be cured but it can be looked after.</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: WhiteShirt_Lungs_Tube_11,
    alt: 'lungs',
    header: 'A NORMAL BREATHING TUBE',
    text: <div>
      <ul>
        <li className='grid-left'>Normal breathing tube is clear and open for easy breathing</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: WhiteShirt_Lungs_Tube_11,
    alt: 'wide lungs',
    header: 'ASTHMA BREATHING TUBE',
    text: <div>
      <ul>
        <li className='grid-left'>Hard for air to be breathed in and out through the narrowed tube</li>
      </ul>
    </div>
  },
  {
    audio: templateBeep,
    image: OrgShirt_Girl_Bending_2,
    alt: 'wideLungs',
    header: 'SIGNS AND SYMPTOMS OF ASTHMA',
    text: <div>
      <ul>
        <li className='grid-left'>Short breath and get tired easily</li>
        <li className='grid-left'>Wheezing sound when they breathe</li>
        <li className='grid-left'>Feeling tight in the chest/hard to breathe</li>
        <li className='grid-left'>And find it hard to talk</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: Dog_Weather_Cleaning_24,
    alt: 'lungs',
    header: 'TRIGGERS FOR ASTHMA IN CHILDREN',
    text: <div>
      <ul>
        <li className='grid-left'>Animal hair (dogs and cats)</li>
        <li className='grid-left'>Some cleaning products and strong smells</li>
        <li className='grid-left'>Cold night air or weather changes.</li>
        <li className='grid-left'>VOG</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: Smoker_FastFood_Vog_Pollen_7,
    alt: 'lungs',
    header: 'TRIGGERS FOR ASTHMA IN CHILDREN',
    text: <div>
      <ul>
        <li className='grid-left'>Pollen from trees, plants and flower</li>
        <li className='grid-left'>Too much takeaway food</li>
        <li className='grid-left'>Cigarette smoke / campfire / BBQ smoke / smoke from fireworks and firecrackers</li>
      </ul>
    </div>,
  },
  {
    audio: templateBeep,
    image: TealShirt_Girl_Sports_Mites_18,
    alt: 'wideLungs',
    header: 'TRIGGERS FOR ASTHMA IN CHILDREN',
    text: <div>
      <ul>
        <li className='grid-left'>Dust mites in bedding</li>
        <li className='grid-left'>Cockroach drippings</li>
        <li className='grid-left'>Active play or sports</li>
        <li className='grid-left'>Colds and chest infection</li>
      </ul>
    </div>,
  },
]

const aboutAsthmaQuiz = {
  type: 'two-options',
  name: 'YES OR NO',
  text: `What is asthma?`,
  options: [
    {
      text: 'Kidney Condition',
      image: Kidney_15,
      alt: 'lungs',
    },
    {
      text: 'Brain Condition',
      image: Brain_13,
      alt: 'template',
    },
    {
      text: 'Heart Condition',
      image: Heart_14,
      alt: 'lungs',
    },
    {
      text: 'Lung Condition',
      image: Lung_32,
      alt: 'template',
    },
  ],
  answer: 3,
  index: 1,
}


const AboutAsthma = () => {
  // GA AboutAsthma pageview
  useSendPageview('Content: About Asthma');

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
        return <Summary image={Lung_32} alt="lungs-wide" explanation={`*Asthma is a chronic lung sickness\n*In Asthma, your breathing tubes are sensitive\n*Different triggers cause Asthma`} buttonLink="/asthma-list"/>
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
