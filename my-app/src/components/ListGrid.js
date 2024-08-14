import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { Col } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ index, item, conditionTitle, completed, setRequestReset }) => {
  const [style, setStyle] = useState("checkmark non-selected");

  if (completed === '1' && style !== 'checkmark selected') {
    setStyle('checkmark selected');
  }

  const navigate = useNavigate();

  const handleClick = () => {
    if (completed === '1') {
      console.log(`requesting reset of deck ${index}`);
      setRequestReset(index);
    } else {
      navigate(item.link);
    }
  }

  return (
    <div className="list-row" onClick={handleClick} >
      <Col className="list-text">
          <h3 className="asthma-orange text-items">{conditionTitle}</h3>
          <h3 className="text-items">{item.text}</h3>
      </Col>
      <div className="list-checkmark">
        <CheckCircleFill className={style} />
      </div>
    </div>
  );
};

const ResetPopup = ({ cancelRequest, orientation, requestReset }) => {

  return (
    <div className="popup-container" onClick={cancelRequest}>
      <div className="popup click-through" style={{
        width: (orientation === 'landscape') ? `${Math.min(window.innerWidth * 0.3, 450)}px` : `${Math.min(window.innerHeight * 0.4, 450)}px`,
        height: (orientation === 'landscape') ? `${Math.min(window.innerWidth * 0.375, 562)}px` : `${Math.min(window.innerHeight * 0.5, 562)}px`,
      }}>
        {`Requesting reset of deck #${requestReset}`}
      </div>
    </div>
  );
}

const ListGrid = ({ items, conditionTitle, orientation }) => {
  const setDefaultCompleted = useCallback(() => {
    let defaultCompleted = '';
    for (let i = 0; i < items.length; i++) {
      defaultCompleted += '0';
    }
    return defaultCompleted;
  }, [items.length]);

  const [completedLists, setCompletedLists] = useState(setDefaultCompleted());
  const [requestReset, setRequestReset] = useState(-1);

  const cancelRequest = () => {
    setRequestReset(-1);
  }

  useEffect(() => {
    console.log('useEffect called')
    const key = conditionTitle.toLowerCase() + 'List';
    let tempCompletedLists = localStorage.getItem(key);
    console.log(`accessed completed list: ${tempCompletedLists}`);
    if (tempCompletedLists === null) {
      console.log('error: no storage detected');
    } else if (tempCompletedLists.length !== items.length){
      console.log('error: storage data invalid');
    } else {
      // Temporary reset of all completed upon completion of all
      // if (!tempCompletedLists.includes('0')) {
      //   tempCompletedLists = setDefaultCompleted();
      //   localStorage.setItem(key, tempCompletedLists);
      // }
      setCompletedLists(tempCompletedLists);
    }
  }, [conditionTitle, items.length, setDefaultCompleted]);

  useEffect(() => {
    console.log('Testing for completedLists triggers: ' + completedLists);
    const key = conditionTitle.toLowerCase() + 'List';
    localStorage.setItem(key, completedLists);
  }, [conditionTitle, completedLists])

  return (
    <div className="list-grid">
      {
        items.map((item, index) => {
          console.log(item + "\n");
          return (<ListItem index={index} item={item} conditionTitle={conditionTitle} completed={completedLists.charAt(index)} setRequestReset={setRequestReset} />);
        })
      }
      {(requestReset > -1) ?
        <ResetPopup cancelRequest={cancelRequest} orientation={orientation} requestReset={requestReset} /> :
        ''
      }
    </div>
  );
};

export default ListGrid;
