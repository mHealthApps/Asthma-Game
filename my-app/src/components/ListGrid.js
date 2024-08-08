import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { Col } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ item, conditionTitle, completed}) => {
  const [style, setStyle] = useState("checkmark non-selected");

  const toggleSelected = (event) => {
    event.stopPropagation();
    if (style === "checkmark non-selected") {
      setStyle("checkmark selected");
    } else {
      setStyle("checkmark non-selected");
    }
  };

  if (completed === '1') {
    setStyle("checkmark selected");
  }

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(item.link);
  }

  return (
    <div className="list-row" onClick={handleClick} >
      <Col className="list-text">
          <h3 className="asthma-orange text-items">{conditionTitle}</h3>
          <h3 className="text-items">{completed}: {item.text}</h3>
      </Col>
      <div className="list-checkmark">
        <CheckCircleFill className={style} onClick={toggleSelected} />
      </div>
    </div>
  );
};

ListItem.propTypes = PropTypes.string.isRequired;

const ListGrid = ({ items, conditionTitle }) => {
  let completedLists = '';
  const setDefaultCompleted = () => {
    completedLists = '';
    for (let i = 0; i < items.length; i++) {
      completedLists += '0';
    }
  }
  setDefaultCompleted();

  useEffect(() => {
    const key = conditionTitle.toLowerCase() + 'List';
    completedLists = localStorage.getItem(key);
    console.log(`completedList: ${completedLists}`);

    if (completedLists === null) {
      console.log('error: no storage detected');
      setDefaultCompleted();
    } else if (completedLists.length !== items.length) {
      console.log('error: storage in improper format');
      setDefaultCompleted();
    }
  }, [conditionTitle, items])


  return (
    <div className="list-grid">
      {
        items.map((item, index) => {
          console.log(item + "\n");
          return (<ListItem key={index} item={item} conditionTitle={conditionTitle} completed={completedLists.charAt(index)} />);
        })
      }
    </div>
  );
};

export default ListGrid;
