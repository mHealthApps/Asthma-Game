import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { ArrowRepeat, HouseFill, PauseCircle } from 'react-bootstrap-icons';
import { Col } from 'react-bootstrap';

const TopBar = ({ barWidth, conditionTitle, orientation, pauseCurrent, replayCurrent }) => {
  const handlePauseClick = () => {
    console.log('pause click');
    pauseCurrent();
  }

  const handleReplayClick = () => {
    console.log('replay click');
    replayCurrent();
  }

  return (
    <Navbar className="asthma-navbar" style={{ backgroundColor: "transparent" }}>
      <Container className="grid-item">
        <Nav>
          <Nav.Link href="/Asthma-WebApp"><HouseFill className={`nav-icon nav-icon-${orientation}`} /></Nav.Link>
        </Nav>
      </Container>
      <div className="grid-item">
        {(barWidth === '' || barWidth === 'none') ?
          <Nav className="justify-content-center headers-container">
            <Col>
              <h3 className="headers">Health Condition</h3>
              <h2 className="headers asthma-header">{conditionTitle}</h2>
            </Col>
          </Nav> :

          <div className="cards-progress-bar justify-content-center">
            <div className={"cards-progress-tracker"} style={{
              width: barWidth,
            }} />
          </div>
        }
      </div>
      {(pauseCurrent !== undefined || replayCurrent !== undefined) ?
        <Container className="grid-item">
          <Nav>
            <div onClick={handlePauseClick}><PauseCircle className={`nav-icon nav-icon-${orientation}`}/></div>
            <div onClick={handleReplayClick}><ArrowRepeat className={`nav-icon nav-icon-${orientation}`} style={{ transform: 'scaleY(-1)' }}/></div>
          </Nav>
        </Container> : ''
      }

    </Navbar>
  );
};

export default TopBar;
