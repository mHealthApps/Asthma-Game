import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import StackedCards from '../components/StackedCards';
import React from 'react';

const demoCards = [
  {
    image: 'templatePeople',
    alt: 'templatePeople',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: 'templateTrain',
    alt: 'templateTrain',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: 'templateTrain',
    alt: 'templateTrain',
    text: '',
  },
  {
    image: 'templatePeople',
    alt: 'templatePeople',
    text: '',
  },
  {
    image: 'templateLungs',
    alt: 'templateLungs',
    text: '',
  },
  {
    image: 'templateLungs',
    alt: 'templateLungs',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
]

const DemoStacked = () => (
  <div className="asthma-red">
    <StackedCards cards={demoCards} title="demo" uponCompletion={'none'} />
  </div>
);

export default DemoStacked;
