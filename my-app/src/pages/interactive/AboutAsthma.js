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


const aboutAsthmaCards = [
  {
    image: templatePeople,
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
    image: templateTrain,
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
    image: templateLungs,
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
    image: templatePeople,
    alt: 'lungs',
    header: 'A NORMAL BREATHING TUBE',
    text: <div>
      <ul>
        <li className='grid-left'>Normal breathing tube is clear and open for easy breathing</li>
      </ul>
    </div>,
  },
  {
    image: templateTrain,
    alt: 'wide lungs',
    header: 'ASTHMA BREATHING TUBE',
    text: <div>
      <ul>
        <li className='grid-left'>Hard for air to be breathed in and out through the narrowed tube</li>
      </ul>
    </div>
  },
  {
    image: templateTrain,
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
    image: templatePeople,
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
    image: templateTrain,
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
    image: templateLungs,
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
      image: templatePeople,
      alt: 'lungs',
    },
    {
      text: 'Brain Condition',
      image: templateTrain,
      alt: 'template',
    },
    {
      text: 'Heart Condition',
      image: templatePeople,
      alt: 'lungs',
    },
    {
      text: 'Lung Condition',
      image: templateTrain,
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
        return <Summary image={templateLungs} alt="lungs-wide" explanation={`*Asthma is a chronic lung sickness\n*In Asthma, your breathing tubes are sensitive\n*Different triggers cause Asthma`} buttonLink="/asthma-list"/>
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
