import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { HouseFill } from 'react-bootstrap-icons';
import { Col } from 'react-bootstrap';

const TopBar = ({ barWidth }) => {
  return (
    <Navbar className="asthma-navbar" style={{ backgroundColor: "transparent" }}>
      <Container className="grid-item">
        <Nav>
          <Nav.Link href="/Asthma-WebApp"><HouseFill className="home-nav"/></Nav.Link>
        </Nav>
      </Container>
      <div className="grid-item">
        {(barWidth === '' || barWidth === 'none') ?
          <Nav className="justify-content-center headers-container">
            <Col>
              <h3 className="headers">Health Condition</h3>
              <h2 className="headers asthma-header"> ASTHMA</h2>
            </Col>
          </Nav> :

          <div className="cards-progress-bar justify-content-center">
            <div className={"cards-progress-tracker"} style={{
              width: barWidth,
            }} />
          </div>
        }
      </div>
    </Navbar>
  );
};

export default TopBar;
