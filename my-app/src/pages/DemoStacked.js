import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import StackedCards from '../modules/StackedCards';
import React from 'react';

const demoCards = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
    alt: 'lungs',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: 'none',
    alt: '',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
    alt: 'lungs',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
    alt: 'lungs',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
    alt: 'lungs',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
    alt: 'lungs',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: '',
    alt: '',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
]

const DemoStacked = () => (
  <div className="asthma-red">
    <StackedCards cards={demoCards}/>
  </div>
);

export default DemoStacked;
