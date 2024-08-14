import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { useNavigate } from 'react-router-dom';


const LinkButton = ({ text, buttonLink, stylingClass, uponClick }) => {
  const navigate = useNavigate();


  const handleClick = () => {
    if (uponClick === 'none') {
      navigate(buttonLink);
    } else {
      uponClick();
      if (buttonLink !== undefined) {
        navigate(buttonLink);
      }
    }
  }

  return (
    <button className={`link-button ${stylingClass}`} onClick={handleClick}>{text}</button>
  );
}

export default LinkButton;
