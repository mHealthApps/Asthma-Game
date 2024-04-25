import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HouseFill, CheckCircleFill } from 'react-bootstrap-icons';
import { Col } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar className="asthma-navbar">
    <Container className="grid-item">
      <Nav>
        <Nav.Link><HouseFill className="home-nav"/></Nav.Link>
      </Nav>
    </Container>
    <div className="grid-item">
      <Nav className="justify-content-center headers-container">
        <Col>
          <h3 className="headers">Health Condition</h3>
          <h2 className="headers asthma-header"> ASTHMA</h2>
        </Col>
      </Nav>
    </div>
  </Navbar>
);

const ListItem = ({ item }) => {
  const [style, setStyle] = useState("checkmark non-selected list-offset");

  const toggleSelected = () => {
    if (style === "checkmark non-selected list-offset") {
      setStyle("checkmark selected list-offset");
    } else {
      setStyle("checkmark non-selected list-offset");
    }
  };

  return (
    <>
      <div className="list-text list-component">
        <Col className="list-offset">
          <h3 className="asthma-orange text-items">ASTHMA</h3>
          <h3 className="text-items">{item}</h3>
        </Col>
      </div>
      <div className="list-checkmark list-component">
        <CheckCircleFill className={style} onClick={toggleSelected} />
      </div>
    </>
  );
};

ListItem.propTypes = PropTypes.string.isRequired;

const items = ['The Lungs', 'About Asthma', 'Treatment', 'Management', 'First Aid Emergency', 'Keeping a healthy lifestyle'];

const ListGrid = () => (
  <div className="list-grid">
    {
      items.map((item, index) => {
        console.log (item + "\n");
        return (<ListItem key={index} item={item} />);
      })
    }
  </div>
);

const ListPage = () => (
  <>
    <TopMenu />
    <ListGrid />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListPage />);
