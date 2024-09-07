import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { Col } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import LinkButton from './LinkButton';

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
      // Developer shortcut to make all decks completed
      // const key = conditionTitle.toLowerCase() + 'List';
      // localStorage.setItem(key, '111111');
    } else {
      navigate(item.link);
    }
  }

  return (
    <div className="list-row" onClick={handleClick} >
      <Col className="list-text">
          <h3 className="asthma-orange-header text-items">{conditionTitle}</h3>
          <h3 className="text-items">{item.text}</h3>
      </Col>
      <div className="list-checkmark">
        <CheckCircleFill className={style} />
      </div>
    </div>
  );
};

const ResetPopup = ({ cancelRequest, link, orientation, requestReset, conditionTitle }) => {
  const resetDeck = () => {
    if (conditionTitle !== undefined) {
      console.log(`conditionTitle: ${conditionTitle}`);
      let key = conditionTitle.toLowerCase() + 'List';
      let completedLists = window.localStorage.getItem(key);
      console.log(`completedList: ${completedLists}`);
      if (completedLists === null) {
        console.log('error: no storage detected');
      } else {
        completedLists = completedLists.substring(0, requestReset) + '0' + completedLists.substring(requestReset + 1, completedLists.length);
        console.log(`new storage data: ${completedLists}`)
        localStorage.setItem(key, completedLists);
        key = conditionTitle.toLowerCase() + 'Congrats';
        localStorage.setItem(key, 'false');
      }
    } else {
      console.log('conditionTitle failure');
    }
  }

  return (
    <div className="popup-container" onClick={cancelRequest}>
      <div className="popup reset-popup" style={{
        width: (orientation === 'landscape') ? `${Math.min(window.innerWidth * 0.3, 450)}px` : `${Math.min(window.innerHeight * 0.4, 450)}px`,
        height: (orientation === 'landscape') ? `${Math.min(window.innerWidth * 0.375, 562)}px` : `${Math.min(window.innerHeight * 0.5, 562)}px`,
      }}>
        <div className='reset-text-container'>
          <h3 className='reset-text' style={{
            fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.026 : 0.019))}px`,
          }}>You have completed this activity. What would you like to do?</h3>
        </div>
        <div className='reset-button-container' style={{
          fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.04 : 0.025))}px`,
        }}>
          <LinkButton text='Review' buttonLink={link} stylingClass='reset-button' uponClick='none' />
        </div>
        <div className='reset-button-container' style={{
          fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.04 : 0.025))}px`,
        }}>
          <LinkButton text='Restart' buttonLink={link} stylingClass='reset-button' uponClick={resetDeck} />
        </div>
        <div className='reset-button-container' style={{
          fontSize: `${(window.innerHeight * ((orientation === 'landscape') ? 0.04 : 0.025))}px`,
        }}>
          <LinkButton text='Cancel' stylingClass='cancel-button' uponClick={cancelRequest} />
        </div>
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

  const checkIfCompleted = (list) => {
    for (let i = 0; i < list.length; i++) {
      console.log(list.charAt(i));
      if (list.charAt(i) !== '1') {
        return false;
      }
    }
    return true;
  }

  const navigate = useNavigate();

  useEffect(() => {
    console.log('useEffect called')
    let key = conditionTitle.toLowerCase() + 'List';
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
      // Checks if all decks have been completed and the user has not seen the congratulations page yet, and then navigates them there if so
      if (checkIfCompleted(tempCompletedLists)) {
        key = conditionTitle.toLowerCase() + 'Congrats';
        const completed = localStorage.getItem(key);
        console.log(`congrats has been visited: ${completed}`);
        if (completed === null || completed !== 'true') {
          setTimeout(() => {
            navigate('/congratulations');
          }, 0)
        }
      } else {
        key = conditionTitle.toLowerCase() + 'Congrats';
        localStorage.setItem(key, 'false');
      }
    }
  }, [conditionTitle, items.length, setDefaultCompleted, navigate]);

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
        <ResetPopup cancelRequest={cancelRequest} link={items[requestReset].link} orientation={orientation} requestReset={requestReset} conditionTitle={conditionTitle} /> :
        ''
      }
    </div>
  );
};

export default ListGrid;
