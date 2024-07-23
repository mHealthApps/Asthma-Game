import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import StackedCards from '../components/StackedCards';
import React from 'react';

const demoCards = [
  {
    image: 'lungsWide',
    alt: 'lungs',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes. Test if the text is very very long so that way it will probably overflow the entire card. Will it be able to resize to fit, so that it does not overflow the card? What if the message, continues still. askdf;jasdlfkja sdflkj ldfjkdfjalkdjfl asjdflajds;flaksd fjlaksjdfl ajsdlkf kljeiourtijans dfkljadfl;aksjd flkajsd lf;kajsldkf jkdlfj dklfj lakj;sfdlkajdlf jasldfaskldfj aslkfjlad flkaj ',
  },
  {
    image: 'none',
    alt: '',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: 'largeImage',
    alt: 'template',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: 'lungsWide',
    alt: 'lungs',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
  {
    image: 'lungs',
    alt: 'lungs',
    text: 'Short sentence',
  },
  {
    image: 'lungsWide',
    alt: 'lungs',
    text: '',
  },
  {
    image: 'newRatio',
    alt: 'template-2',
    text: 'The windpipe divides into two smaller air tubes. One air tube goes into the left lung and one into the right lung. The air tubes then branch out into smaller air tubes.',
  },
]

const DemoStacked = () => (
  <div className="asthma-red">
    <StackedCards cards={demoCards} uponCompletion={'none'} />
  </div>
);

export default DemoStacked;
