import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import { Lungs, CardList, Book, InfoCircle } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import useSendPageview from '../../hooks/useSendPageview';

const linkItems = [
  {
    text: 'Cards',
    link: '/sound-choice',
    icon: <Lungs />
  },
  {
    text: 'Glossary',
    link: '/glossary',
    icon: <CardList />
  },
  {
    text: 'Resources',
    link: '/resources',
    icon: <Book />
  },
  {
    text: 'About us',
    link: '/about-us',
    icon: <InfoCircle />
  },
];

const LinkItem = ( {item} ) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(item.link);
  }

  return (
    <div className='home-link-item' onClick={handleClick}>
      <div className='home-link-icon'>
        {item.icon}
      </div>
      <div className='home-link-text'>
        {item.text}
      </div>
    </div>
  );
}

const HomeLinks = ({ items }) => {
  return (
    <div className='home-links-container'>
      {
        items.map((item, index) => {
          return (
            <LinkItem item={item} key={index} />
          );
        })
      }
    </div>
  );
};


const Home = () => {
  // GA Home pageview
  useSendPageview();

  return (
    <div className="home-module asthma-red">
      <div className='home-header'>
        <h1>LUNG HEALTH FOR KIDS</h1>
      </div>
      <HomeLinks items={linkItems} />
    </div>
  );
};

export default Home;
