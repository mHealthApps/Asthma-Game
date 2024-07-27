import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { useNavigate } from 'react-router-dom';


const LinkButton = ({ buttonLink }) => {
  const navigate = useNavigate();

  const route = () => {
    navigate(buttonLink);
  }

  return (
    <button className='summary-button' onClick={route}>Complete Section</button>
  );
}

export default LinkButton;
