import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HouseFill } from 'react-bootstrap-icons';
import { Button, Col } from 'react-bootstrap';


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

const Deck = () => {
  return (
    <></>
  );
};

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
    <>
      <TopBar barWidth={`${(cardNum / totalCards) * 100}%`}/>
      <MidText cardNum={cardNum} totalCards ={totalCards} onClick={toggleNext} />
      <Button onClick={togglePrev}>Previous</Button>
      <Button onClick={toggleNext}>Next</Button>
      <Deck />
    </>
  );
};

export default StackedCards;
