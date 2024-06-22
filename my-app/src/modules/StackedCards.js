import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HouseFill } from 'react-bootstrap-icons';
import { Button, Col } from 'react-bootstrap';
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import '../style.css';


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

const cards = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lungs_diagram_detailed.svg/375px-Lungs_diagram_detailed.svg.png',
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: 0,
  delay: i * 100,
});

const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          >

          </animated.div>
        </animated.div>
      ))}
    </>
  )
}

const StackedCards = () => {
  const [cardNum, setCardNum] = useState(1);
  const totalCards = 7;

  const toggleNext = () => {
    if (cardNum < totalCards) {
      setCardNum(cardNum + 1);
    }
  };
  const togglePrev = () => {
    if (cardNum > 1) {
      setCardNum(cardNum - 1);
    }
  };


  return (
    <div className="stacked-cards-module">
      <TopBar barWidth={`${(cardNum / totalCards) * 100}%`}/>
      <MidText cardNum={cardNum} totalCards ={totalCards} onClick={toggleNext} />
      <Button onClick={togglePrev}>Previous</Button>
      <Button onClick={toggleNext}>Next</Button>
      <div className="deck-container asthma-red">
        <Deck />
      </div>
    </div>
  );
};

export default StackedCards;
