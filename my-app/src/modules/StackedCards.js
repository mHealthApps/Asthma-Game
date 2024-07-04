import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HouseFill } from 'react-bootstrap-icons';
import { Button, Col } from 'react-bootstrap';
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import '../style.css';
import lungs from '../assets/images/lungs-diagram.png';
import lungsWide from '../assets/images/lungs-wide.jpg';
import largeImage from '../assets/images/large-image-red.png';
import newRatio from '../assets/images/new-ratio-image.png';


const images = {
  lungs,
  lungsWide,
  largeImage,
  newRatio,
}



const TopBar = ({ barWidth }) => {
  return (
    <Navbar className="asthma-navbar" style={{ backgroundColor: "transparent" }}>
      <Container className="grid-item">
        <Nav>
          <Nav.Link href="/"><HouseFill className="home-nav"/></Nav.Link>
        </Nav>
      </Container>
      <div className="grid-item">
        <div className="cards-progress-bar justify-content-center">
          <div className={"cards-progress-tracker"} style={{
            width: barWidth,
          }}
          >

          </div>
        </div>
      </div>
    </Navbar>
  );
};

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

const ResponsiveText = ({ text }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const adjustCardFontSize = () => {
    const container = containerRef.current;
    const text = textRef.current;
    let fontSize = 2.2;
    text.style.fontSize = fontSize + 'vh';

    while (text.scrollHeight > container.clientHeight) {
      fontSize -= 0.1;
      text.style.fontSize = fontSize + 'vh';
    }
  }

  useEffect(() => {
    adjustCardFontSize();
    window.addEventListener('resize', adjustCardFontSize);
    return () => window.removeEventListener('resize',adjustCardFontSize);
  }, [])

  return (
    <div ref={containerRef}
      style={{
        height: '23vh',
        overflow: 'hidden',
      }}
    >
      <div ref={textRef} className="card-text">{text}</div>
    </div>
  );
}

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i, del) => ({
  x: 0,
  y: 20 + i * -5,
  scale: 1,
  rot: 0,
  delay: (del === undefined) ? i * 100 : del,
});

const genericDestination = (i) => ({
  x: (200 + window.innerWidth) * -1,
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

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) {
      gone.add(index);
      toggleNext();
    } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flies out left or right, otherwise goes back to zero
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
            <animated.div className="card"
              {
                ...((i === cards.length - cardNum) ? bind(i) : {})
              }
              style={{
                transform: interpolate([rot, scale], trans),
              }}
            >
              {(cards[cards.length - i - 1].image !== 'none' && cards[cards.length - i - 1].image !== '') ?
                <img alt={cards[cards.length - i - 1].alt} src={images[cards[cards.length - i - 1].image]} /> : ''
              }
              <h2>{cards[cards.length - i - 1].src}</h2>
              <ResponsiveText text={cards[cards.length - i - 1].text} />
            </animated.div>
          </animated.div>
        ))}
      </div>
      <div className="buttons-stacked">
        <div className="grid-item">
          <Button className="stacked-button" onClick={togglePrev}>Previous</Button>
        </div>
        <div className="grid-item grid-right">
          <Button className="stacked-button" onClick={toggleNext}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default StackedCards;
