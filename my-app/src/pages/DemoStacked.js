import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import StackedCards from '../modules/StackedCards';
import React from 'react';

const demoCards = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
  'failed url 2',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
]

const DemoStacked = () => (
  <div className="asthma-red">
    <StackedCards cards={demoCards}/>
  </div>
);

export default DemoStacked;
