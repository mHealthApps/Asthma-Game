import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';
import { Col } from 'react-bootstrap';
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import '../style.css';
import TopBar from "./TopBar";
import useOrientation from '../hooks/useOrientation';
import ResponsiveText from './ResponsiveText';
import LinkButton from './LinkButton';


const MidText = ({ cardNum, title, totalCards, header }) => {
  return (
    <div className="justify-content-center mid-text">
      <Col>
        {(cardNum > 0) ?
        <h2 className="headers asthma-header">
          {header}
        </h2> : ''
        }
        <h2 className={`headers ${(cardNum > 0) ? 'card-num-headers': 'asthma-header asthma-header-large'}`}>
          {(cardNum > 0) ?
            `Card ${cardNum} of ${totalCards}` :
            title
          }
        </h2>
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

const StackedCards = ({ cards, title, uponCompletion, conditionTitle }) => {
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

  // Audio functionality
  const [soundOff, setSoundOff] = useState(0);
  const audioRefs = useRef(cards.map(() => new Audio()));
  const [initAudio, setInitAudio] = useState(false);

  const playAudio = useCallback((index) => {
    if (soundOff === 0) {
      console.log(`play card #${index} audio`);
      if (audioRefs.current[index]) {
        audioRefs.current[index].play();
      }
    } else {
      console.log('sound disabled');
    }
  }, [soundOff]);
  const pauseAudio = (index) => {
    if (soundOff === 0) {
      console.log(`pause card #${index} audio`);
      if (audioRefs.current[index]) {
        audioRefs.current[index].pause();
      }
      // currentAudio.current.pause();
    }
  };

  const pauseCurrent = () => {
    console.log(`user requests pause card #${cardNum} audio`);
    pauseAudio(cardNum - 1);
  }

  const replayCurrent = () => {
    console.log(`user requests reset card #${cardNum} audio`);
    audioRefs.current[cardNum - 1].currentTime = 0;
    audioRefs.current[cardNum - 1].play();
  }

  useEffect(() => {
    let tempSoundOff = localStorage.getItem('soundOff');
    if (tempSoundOff !== null) {
      console.log(`reading in sound choice: ${tempSoundOff}`)
      setSoundOff(Number(tempSoundOff));
    }
    // Populating audioRefs with proper sources and playing first sound
    if (!initAudio) {
      for (let i = 0; i < audioRefs.current.length; i++) {
        audioRefs.current[i].src = cards[i].audio;
        console.log(`card #${i} audio src: ${audioRefs.current[i].src}`);
      }
      setInitAudio(true);
      if (tempSoundOff === null || Number(tempSoundOff) === 0) {
        playAudio(0);
      }
    }
  }, [cards, initAudio, playAudio]);

  // useEffect(() => {
  //   audioPlayingRef.current = audioPlaying;
  // }, [audioPlaying]);
  //
  // useEffect(() => {
  //   if (audioPlayingRef.current.length === cards.length) {
  //     const updatedAudioPlaying= [...audioPlayingRef.current];
  //     for (let i = 0; i < updatedAudioPlaying.length; i++) {
  //       // stopSound(cardsSounds[i]);
  //       if (updatedAudioPlaying[i] !== Sound.status.PAUSED && updatedAudioPlaying[cardNum - 1] !== i) {
  //         console.log(`Pause card #${i} audio`);
  //         // updatedAudioPlaying[i] = Sound.status.PAUSED;
  //       }
  //     }
  //     if (updatedAudioPlaying[cardNum - 1] !== undefined) {
  //       updatedAudioPlaying[cardNum - 1] = Sound.status.PLAYING;
  //       setAudioPlaying(updatedAudioPlaying);
  //       console.log(`audioPlaying: ${updatedAudioPlaying}`);
  //     }
  //   }
  // }, [cardNum, cards]);

  // cardNum toggles
  const toggleNext = () => {
    if (cardNum <= cards.length) {
      pauseAudio(cardNum - 1);
      const index = cards.length - cardNum;
      if (!gone.has(index)) {
        gone.add(index);
        api.start(i => {
          if (i !== index) return
          return genericDestination(i);
        });
      }
      if (gone.size === cards.length) {
        if (uponCompletion === 'none') {
          setTimeout(() => {
            gone.clear()
            api.start(i => to(i))
          }, 600)
          setCardNum(1)
        } else {
          setTimeout(() => {
            uponCompletion();
          }, 0)
        }
      } else {
        playAudio(cardNum);
        setCardNum(cardNum + 1);
      }
    }
  };

  // useEffect(() => {
  //   console.log(`image reference: ${cards[0].image}`);
  //   console.log(`image text: ${cards[1].image}`);
  // })

  const buttonNext = () => {
    if (cards.length - cardNum !== 0) {
      toggleNext();
    }
  }
  const togglePrev = () => {
    if (cardNum > 1) {
      pauseAudio(cardNum - 1);
      playAudio(cardNum - 2);
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
        if (index !== 0) {
          gone.add(index);
          toggleNext();
        }
      } else {
        togglePrev();
      }
    } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? Math.max(200 + window.innerWidth, 200 + window.innerHeight) * dir : (down && mx < 0 && i !== 0) ? mx : 0 // When a card is gone it flies out left or right, otherwise goes back to zero
      const rot = (i === 0 && mx < 0) ? 0 : mx / 100 + (isGone ? dir * 2 * velocity : down ? 0 : -mx / 100) // How much the card tilts, flicking it harder makes it rotate faster
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
      {(soundOff === 0) ?
        <TopBar barWidth={`${((cardNum - 1) / (cards.length - 1)) * 100}%`} conditionTitle={conditionTitle} orientation={orientation} pauseCurrent={pauseCurrent} replayCurrent={replayCurrent} /> :
        <TopBar barWidth={`${((cardNum - 1) / (cards.length - 1)) * 100}%`} conditionTitle={conditionTitle} orientation={orientation} />
      }
      <MidText cardNum={cardNum - 1} totalCards={cards.length - 1} title={title} onClick={toggleNext} header={cards[cardNum - 1].header} />
      <div className="deck-container">
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className="deck" key={i} style={{ x, y }}>
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div className="stacked-card"
              {
                ...((i === cards.length - cardNum) ? bind(i) : {})
              }
              style={{
                transform: interpolate([rot, scale], trans),
                // display: (orientation === 'landscape') ? 'grid' : 'flex',
                // gridTemplateColumns: (orientation === 'landscape') ? (cards[cards.length - i - 1].image !== 'none' && cards[cards.length - i - 1].image !== '') ? (cards[cards.length - i - 1].text !== '') ? '1fr 0.1fr 1fr': '1fr 0fr 0fr' : '0fr 0fr 1fr' : '',
                // flexDirection: 'row'
                display: 'flex',
                gridTemplateColumns: '',
                flexDirection: (orientation === 'landscape') ? 'column' : 'row',
                justifyContent: (orientation === 'landscape') ? 'center' : 'auto',
              }}
            >
              {(orientation === 'landscape') ?
              <>
                <div className='landscape-grid' style={{
                  display: 'grid',
                  gridTemplateColumns: ((cards[cards.length - i - 1].image !== 'none' && cards[cards.length - i - 1].image !== '') || cards[cards.length - i - 1].video !== undefined) ? (cards[cards.length - i - 1].text !== '') ? '1fr 0.1fr 1fr': '1fr 0fr 0fr' : '0fr 0fr 1fr',
                  width: '100%',
                  height: (i === 0) ? `${(window.innerHeight * 0.38)}px` : `${(window.innerHeight * 0.5)}px`,
                }}>
                  <div className="grid-item">
                      {((cards[cards.length - i - 1].image !== 'none' && cards[cards.length - i - 1].image !== '') || cards[cards.length - i - 1].video !== undefined) ?
                      <div className="vertical-center-items">
                        {(cards[cards.length - i - 1].animation !== undefined) ?
                          <video className="card-animation" src={cards[cards.length - i - 1].animation} autoPlay loop muted playsInline style={{
                            width: '100%',
                          }}/> :
                          (cards[cards.length - i - 1].video !== undefined) ?
                            <iframe className="card-video" src={cards[cards.length - i - 1].video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{
                              width: '100%',
                              height: (i === 0) ? `${(window.innerHeight * 0.38)}px` : `${(window.innerHeight * 0.5)}px`,
                            }}/> :
                            <img className="card-image" alt={cards[cards.length - i - 1].alt} src={cards[cards.length - i - 1].image} style={{
                              width: '100%',
                              maxHeight: (i === 0) ? `${(window.innerHeight * 0.38)}px` : `${(window.innerHeight * 0.5)}px`,
                            }}/>
                        }
                      </div> : ''
                      }
                  </div>
                  <div className="grid-item"/>
                  <div className="grid-item">
                    {(cards[cards.length - i - 1].text !== '') ?
                      <div className="vertical-center">
                      <ResponsiveText text={cards[cards.length - i - 1].text} height={(i === 0) ? `${(window.innerHeight * 0.38)}px` : `${(window.innerHeight * 0.5)}px`} initialSize={window.innerWidth * 0.02} center={true} />
                    </div> : ''
                    }
                  </div>
                </div>
                {(i === 0) ?
                  <div className="grid-item final-card-button-container" style={{
                    height: `${(window.innerHeight * 0.11)}px`,
                    fontSize: `${(window.innerHeight * 0.032)}px`,
                  }}>
                    <LinkButton text={`Let's test your knowledge`} uponClick={toggleNext} stylingClass='final-card-button'/>
                  </div> : ''
                }
              </> :
              <>
                <div className="card-width">
                  {(cards[cards.length - i - 1].animation !== undefined) ?
                    <video className="card-animation" src={cards[cards.length - i - 1].animation} autoPlay loop muted playsInline style={{
                      height: (cards[cards.length - i - 1].text !== '') ? `${(window.innerHeight * 0.3)}px`
                        : (i === 0) ? `${(window.innerHeight * 0.43)}px` : `${(window.innerHeight * 0.5)}px`,
                      width: '100%',
                      maxHeight: '80%',
                    }}/> :
                    (cards[cards.length - i - 1].image !== 'none' && cards[cards.length - i - 1].image !== '') ?
                      <img className="card-image" alt={cards[cards.length - i - 1].alt} src={cards[cards.length - i - 1].image} style={{
                        height: (cards[cards.length - i - 1].text !== '') ? `${(window.innerHeight * 0.3)}px`
                          : (i === 0) ? `${(window.innerHeight * 0.43)}px` : `${(window.innerHeight * 0.5)}px`,
                        width: '100%',
                        maxHeight: '80%',
                      }}/> :
                      (cards[cards.length - i - 1].video !== undefined) ?
                        <div className='card-video-container' style={{
                          width: '100%',
                          height: '82%',
                        }}>
                        <iframe className="card-video" src={cards[cards.length - i - 1].video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{
                          width: '100%',
                          height: `${(window.innerWidth * 0.304)}px`,
                          maxHeight: '100%',
                        }}/></div> : ''
                  }
                  {(cards[cards.length - i - 1].text !== '') ?
                    <div className="grid-item">
                      <ResponsiveText text={cards[cards.length - i - 1].text}
                    height={(cards[cards.length - i - 1].image !== 'none' && cards[cards.length - i - 1].image !== '') ? (i === 0) ? `${(window.innerHeight * 0.13)}px` : `${(window.innerHeight * 0.2)}px` : (i === 0) ? `${(window.innerHeight * 0.44)}px` : `${(window.innerHeight * 0.5)}px`} initialSize={window.innerHeight * 0.022} center={true} />
                    </div> : ''
                  }
                  {(i === 0) ?
                  <div className="grid-item final-card-button-container" style={{
                    height: `${(window.innerHeight * 0.06)}px`,
                    fontSize: `${(window.innerHeight * 0.017)}px`,
                  }}>
                    <LinkButton text={`Let's test your knowledge`} uponClick={toggleNext} stylingClass='final-card-button'/>
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
          {(cardNum !== 1) ?
            <ArrowLeftCircleFill className={`stacked-button stacked-button-${orientation}`} onClick={togglePrev} /> : ''
          }
        </div>
        <div className="grid-item click-through">

        </div>
        <div className="grid-item grid-left">
          {(cardNum !== cards.length) ?
            <ArrowRightCircleFill className={`stacked-button stacked-button-${orientation}`} onClick={buttonNext} /> : ''
          }
        </div>
      </div>

      {/*<div className='audio-module'>*/}
      {/*  {cards.map((card, i) => (*/}
      {/*    (i < 2) ?*/}
      {/*      <Sound key={i} url={card.audio} playStatus={Sound.status.PLAYING} /> : ''*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
};

export default StackedCards;
