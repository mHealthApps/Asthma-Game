import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { HouseFill, PauseCircle } from 'react-bootstrap-icons';
import ArrowReplay from '../assets/images/arrow-replay.svg';
import { Col } from 'react-bootstrap';
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const TopBar = ({ barWidth, conditionTitle, orientation, pauseCurrent, replayCurrent, oneLine }) => {
  const { removeToken, token } = useAuth();
  const navigate = useNavigate();

  const handlePauseClick = () => {
    console.log('pause click');
    pauseCurrent();
  }

  const handleReplayClick = () => {
    console.log('replay click');
    replayCurrent();
  }

  const handleLogout = () => {
    console.log('logout');
    removeToken();
    navigate("/login");
  }

  return (
    <Navbar className="asthma-navbar" style={{ backgroundColor: "transparent" }}>
      <Container className="grid-item">
        <Nav>
          <Nav.Link href="/Asthma-WebApp"><HouseFill className={`nav-icon nav-icon-${orientation}`} /></Nav.Link>
        </Nav>
      </Container>
      <div className="grid-item">
        {(oneLine === undefined || oneLine !== '') ? (barWidth === undefined || barWidth === '' || barWidth === 'none') ?
          <Nav className="justify-content-center headers-container">
            <Col>
              {(oneLine === undefined) ?
                <>
                  <h3 className="headers">Health Condition</h3>
                  <h2 className="headers asthma-header">{conditionTitle}</h2>
                </> :
                <h2 className="headers asthma-header">{oneLine}</h2>
              }
            </Col>
          </Nav> :

            <div className="cards-progress-bar justify-content-center">
            <div className={"cards-progress-tracker"} style={{
              width: barWidth,
            }} />
          </div> :

          ''
        }
      </div>
      
        <Container className="grid-item">
          <Nav className='grid-right audio-control-container'>
            {pauseCurrent !== undefined && (
              <div onClick={handlePauseClick}><PauseCircle className={`nav-icon nav-icon-${orientation}`}/></div>
              )}
            {replayCurrent !== undefined && (
              <div onClick={handleReplayClick}><img src={ArrowReplay} className={`nav-icon nav-icon-${orientation} replay-icon`} style={{width: '1.2em', height: '1.2em'}} alt='replay icon'/></div>
            )}
            {/*<div onClick={handleReplayClick}><ArrowRepeat className={`nav-icon nav-icon-${orientation} replay-icon`} style={{ transform: 'scaleY(-1)' }}/></div>*/}
            
            {token && (
              <button className="btn btn-outline-light ms-2" onClick={handleLogout}>
                Logout
              </button>
            )}
          
          </Nav>
        </Container>
      

    </Navbar>
  );
};

export default TopBar;
