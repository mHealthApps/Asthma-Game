import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';
import { Col } from 'react-bootstrap';
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import '../style.css';
import TopBar from "./TopBar";
import lungs from '../assets/images/lungs-diagram.png';
import lungsWide from '../assets/images/lungs-wide.jpg';
import largeImage from '../assets/images/large-image-red.png';
import newRatio from '../assets/images/new-ratio-image.png';
import useOrientation from '../hooks/useOrientation';
import ResponsiveText from './ResponsiveText';


const images = {
  lungs,
  lungsWide,
  largeImage,
  newRatio,
}

const MidText = ({ cardNum, totalCards }) => {
  return (
    <div className="justify-content-center mid-text">
      <Col>
        <h2 className="headers asthma-header"> ASTHMA</h2>
        <h2 className="headers card-num-headers">Card {cardNum} of {totalCards}</h2>
      </Col>
    </div>
  );
};

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i, del) => ({
  x: 0,
  y: 20 + i * -5,
  scale: 1,
  rot: 0,
  delay: (del === undefined) ? i * 100 : del,
});

const genericDestination = (i) => ({
  x: Math.max(200 + window.innerWidth, 200 + window.innerHeight) * -1,
  y: i * -4,
  rot: -5,
  delay: undefined,
  config: { friction: 50, tension: 120 },
});

const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(0deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const StackedCards = ({ cards }) => {
  /* Handling screen orientation */
  const orientation = useOrientation();

  const [cardNum, setCardNum] = useState(1);

  // Deck functionality
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity

  // cardNum toggles
  const toggleNext = () => {
    if (cardNum <= cards.length) {
      const index = cards.length - cardNum;
      if (!gone.has(index)) {
        gone.add(index);
        api.start(i => {
          if (i !== index) return
          return genericDestination(i);
        });
      }
      setCardNum(cardNum + 1);
      if (gone.size === cards.length) {
        setTimeout(() => {
          gone.clear()
          api.start(i => to(i))
        }, 600)
        setCardNum(1)
        /*if (orientation === 'landscape') {
          setOrientation('portrait');
        } else {
          setOrientation('landscape');
        }*/
      }
    }
  };
  const togglePrev = () => {
    if (cardNum > 1) {
      setCardNum(cardNum - 1);
      const index = cards.length - cardNum + 1;
      gone.clear();
      for (let i = cards.length - 1; i > index; i--) {
        gone.add(i);
      }
      //console.log(gone);
      api.start(i => {
        if (i !== index) return
        return to(i, 0)
      });
    }
  };

  // Sets up the animations for dragging and removing cards
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out or toggle previous card
    if (!down && trigger) {
      if (dir < 0) {
        gone.add(index);
        toggleNext();
      } else {
        togglePrev();
      }
    } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? Math.max(200 + window.innerWidth, 200 + window.innerHeight) * dir : (down && mx < 0) ? mx : 0 // When a card is gone it flies out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 2 * velocity : down ? 0 : -mx / 100) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })

  })

  return (
    <div className="stacked-cards-module">
      <TopBar barWidth={`${(cardNum / cards.length) * 100}%`}/>
      <MidText cardNum={cardNum} totalCards={cards.length} onClick={toggleNext}/>
      <div className="deck-container asthma-red">
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className="deck" key={i} style={{ x, y }}>
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div className="stacked-card"
              {
                ...((i === cards.length - cardNum) ? bind(i) : {})
              }
              style={{
                transform: interpolate([rot, scale], trans),
                display: (orientation === 'landscape') ? 'grid' : 'flex',
                gridTemplateColumns: (orientation === 'landscape') ? (cards[cards.length - i - 1].image !== 'none' && cards[cards.length - i - 1].image !== '') ? (cards[cards.length - i - 1].text !== '') ? '1fr 0.1fr 1fr': '1fr 0fr 0fr' : '0fr 0fr 1fr' : '',
                flexDirection: 'row'
              }}
            >
              {(orientation === 'landscape') ?
              <>
                <div className="grid-item">
                    {(cards[cards.length - i - 1].image !== 'none' && cards[cards.length - i - 1].image !== '') ?
                    <div className="vertical-center">
                      <img className="card-image" alt={cards[cards.length - i - 1].alt} src={images[cards[cards.length - i - 1].image]} style={{
                        width: '100%',
                        maxHeight: `${(window.innerHeight * 0.5)}px`,
                      }}/>
                    </div> : ''
                    }
                </div>
                <div className="grid-item" />
                <div className="grid-item">
                  {(cards[cards.length - i - 1].text !== '') ?
                  <div className="vertical-center">
                    <ResponsiveText text={cards[cards.length - i - 1].text} height={`${(window.innerHeight * 0.5)}px`} initialSize={window.innerWidth * 0.02} />
                  </div> : ''
                  }
                </div>
              </> :
              <>
                <div className="card-width">
                  {(cards[cards.length - i - 1].image !== 'none' && cards[cards.length - i - 1].image !== '') ?
                  <img className="card-image" alt={cards[cards.length - i - 1].alt} src={images[cards[cards.length - i - 1].image]} style={{
                    height: (cards[cards.length - i - 1].text !== '') ? `${(window.innerHeight * 0.3)}px`
                   : `${(window.innerHeight * 0.5)}px`,
                    width: '100%',
                    maxHeight: '100%',
                  }}/> : ''
                  }
                  {(cards[cards.length - i - 1].text !== '') ?
                  <div className="grid-item">
                    <ResponsiveText text={cards[cards.length - i - 1].text} height={(cards[cards.length - i - 1].image !== 'none' && cards[cards.length - i - 1].image !== '') ? `${(window.innerHeight * 0.2)}px` : `${(window.innerHeight * 0.5)}px`} initialSize={window.innerHeight * 0.022} />
                  </div> : ''
                  }
                </div>
              </>
              }
            </animated.div>
          </animated.div>
        ))}
      </div>
      <div className={`stacked-button-container click-through stacked-button-container-${orientation}`}>
        <div className="grid-item grid-right">
          <ArrowLeftCircleFill className={`stacked-button stacked-button-${orientation}`} onClick={togglePrev} />
        </div>
        <div className="grid-item click-through">

        </div>
        <div className="grid-item grid-left">
          <ArrowRightCircleFill className={`stacked-button stacked-button-${orientation}`} onClick={toggleNext} />
        </div>
      </div>
    </div>
  );
};

export default StackedCards;
