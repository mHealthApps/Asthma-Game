import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import PropTypes from 'prop-types';
import { CheckCircleFill } from 'react-bootstrap-icons';
import { Col } from 'react-bootstrap';
import TopBar from '../components/TopBar'


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
  <div className="list-module">
    <div className="asthma-red">
      <TopBar barWidth=''/>
    </div>
    <ListGrid />
  </div>
);

export default ListPage;
