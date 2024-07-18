import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Quiz from '../components/Quiz';
import React from 'react';


const demoQuizInfo = {
  type: 'two-options',
  name: 'THIS OR THAT',
  text: `How do I know my child's asthma is under control?`,
  options: [
    {
      text: 'No need to use blue reliever puffer more than 2 times a week (except for exercise)',
      image: 'newRatio',
      alt: 'template',
    },
    {
      text: 'Very hard to breathe and talk. Lot more coughing, maybe with lots of spit',
      image: 'lungsWide',
      alt: 'template',
    },
  ],
  answer: 0,
}
const DemoQuiz = () => (
  <div className="asthma-red">
    <Quiz quiz={demoQuizInfo} />
  </div>
);

export default DemoQuiz;