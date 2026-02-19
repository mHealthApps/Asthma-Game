import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { useNavigate } from 'react-router-dom';


const LinkButton = ({ text, buttonLink, stylingClass, uponClick }) => {
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.stopPropagation();
    if (uponClick === 'none' || uponClick === undefined) {
      navigate(buttonLink);
    } else {

      uponClick();
      if (buttonLink !== undefined) {
        navigate(buttonLink);
      }
    }
  }

  return (
    <button className={`link-button ${stylingClass}`} onClick={(e) => {handleClick(e)}}>{text}</button>
  );
}

export default LinkButton;
