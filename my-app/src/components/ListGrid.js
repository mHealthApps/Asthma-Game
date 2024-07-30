import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { Col } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ item, conditionTitle }) => {
  const [style, setStyle] = useState("checkmark non-selected");

  const toggleSelected = (event) => {
    event.stopPropagation();
    if (style === "checkmark non-selected") {
      setStyle("checkmark selected");
    } else {
      setStyle("checkmark non-selected");
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(item.link);
  }

  return (
    <div className="list-row" onClick={handleClick} >
      <Col className="list-text">
          <h3 className="asthma-orange text-items">{conditionTitle}</h3>
          <h3 className="text-items">{item.text}</h3>
      </Col>
      <div className="list-checkmark">
        <CheckCircleFill className={style} onClick={toggleSelected} />
      </div>
    </div>
  );
};

ListItem.propTypes = PropTypes.string.isRequired;

const ListGrid = ({ items, conditionTitle }) => (
  <div className="list-grid">
    {
      items.map((item, index) => {
        console.log (item + "\n");
        return (<ListItem key={index} item={item} conditionTitle={conditionTitle} />);
      })
    }
  </div>
);

export default ListGrid;
