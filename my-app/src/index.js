import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HouseFill, CheckCircleFill } from 'react-bootstrap-icons';
import { Col, NavItem } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar className="asthma-navbar">
    <Container className="grid-item">
      <Nav>
        <Nav.Link><HouseFill className="home-nav"/></Nav.Link>
      </Nav>
    </Container>
    <div className="grid-item">
      <Nav className="justify-content-center">
        <Col>
          <h3 className="headers">Health Condition</h3>
          <h2 className="headers"> ASTHMA</h2>
        </Col>
      </Nav>
    </div>
  </Navbar>
);

const ListItem = ({ item }) => (
  <>
    <div className="list-text list-component">
      <Col>
        <h3 className="asthma-orange text-items">ASTHMA</h3>
        <h3 className="text-items">{item}</h3>
      </Col>
    </div>
    <div className="list-checkmark list-component">
      <CheckCircleFill className="checkmark"/>
    </div>
  </>
);

ListItem.propTypes = PropTypes.string.isRequired;

const items = ['The Lungs', 'About Asthma', 'Treatment', 'Management', 'First Aid Emergency', 'Keeping a healthy lifestyle'];

const ListGrid = () => (
  <div className="list-grid">
    {
      items.map((item, index) => {
        console.log (item + "\n");
        return (<ListItem key={index} item={item}/>);
      })
    }
  </div>
);

const MiddleMenu = () => (

  <Navbar bg="gray" expand="lg" className={"justify-content-center"}>
    <Container className={"justify-content-center"}>
      <Nav className="justify-content-center">
        <NavDropdown title={"MEN"}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Nothing Here</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title={"WOMEN"}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Nothing Here</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title={"KIDS"}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Nothing Here</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title={"BRANDS"}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Nothing Here</NavDropdown.ItemText>
        </NavDropdown>
        <NavItem className="p-2 gray" title={"SEARCH"}>
          SEARCH
        </NavItem>
      </Nav>
    </Container>
  </Navbar>
);

const FullWidthImage = () => (
  <>
    <div className="list-text list-component">
      <Col>
        <h3>ASTHMA</h3>
        <h3>The Lungs</h3>
      </Col>
    </div>
    <div className="list-checkmark list-component">
      <CheckCircleFill className="checkmark"/>
    </div>
    <Container className="list-text">
      <Col>
        <h3>ASTHMA</h3>
        <h3>About Asthma</h3>
      </Col>
    </Container>
    <Container className="list-checkmark">
      <CheckCircleFill className="checkmark"/>
    </Container>
    <Container className="list-text">
      <Col>
        <h3>ASTHMA</h3>
        <h3>Treatment</h3>
      </Col>
    </Container>
    <Container className="list-checkmark">
      <CheckCircleFill className="checkmark"/>
    </Container>
    <Container className="list-text">
      <Col>
        <h3>ASTHMA</h3>
        <h3>Management</h3>
      </Col>
    </Container>
    <Container className="list-checkmark">
      <CheckCircleFill className="checkmark"/>
    </Container>
    <Container className="list-text">
      <Col>
        <h3>ASTHMA</h3>
        <h3>First Aid Emergency</h3>
      </Col>
    </Container>
    <Container className="list-checkmark">
      <CheckCircleFill className="checkmark"/>
    </Container>
    <Container className="list-text">
      <Col>
        <h3>ASTHMA</h3>
        <h3>Keeping a healthy lifestyle</h3>
      </Col>
    </Container>
    <Container className="list-checkmark">
      <CheckCircleFill className="checkmark"/>
    </Container>
  </>
);

const FooterMenu = () => (
  <footer className="my-foot justify-content">
    <Container>
      <div className="row">
        <div className="col">
          <h3>NAVIGATION</h3>
          <hr/>
          <ul className="lineup left">
            <li>About Us</li>
            <li>Employment</li>
            <li>Videos</li>
          </ul>
        </div>
        <div className="col">
          <h3>MAIN MENU</h3>
          <hr/>
          <ul className="lineup left">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>
        <div className="col">
          <h3>CONNECT</h3>
          <hr/>
          <ul className="lineup left">
            <li>Sign up for the latest updates</li>
            <li>
              <form>
                <input type="text" placeholder="Enter Email Address"/>
                <button className="btn btn-dark my-btn">Join</button>
              </form>
            </li>

          </ul>
        </div>
      </div>
    </Container>
  </footer>
);

const IslandSnow = () => (
  <>
    <TopMenu/>
    <ListGrid/>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow/>);
