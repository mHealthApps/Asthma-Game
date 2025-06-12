import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import { LungsFill, FileEarmarkTextFill, BookFill, InfoCircleFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import useOrientation from '../../hooks/useOrientation';

const linkItems = [
  {
    text: 'Asthma Education',
    link: '/sound-choice',
    icon: <LungsFill />
  },
  {
    text: 'Glossary',
    link: '/glossary',
    icon: <FileEarmarkTextFill />
  },
  {
    text: 'Resources',
    link: '/resources',
    icon: <BookFill />
  },
  {
    text: 'About us',
    link: '/about-us',
    icon: <InfoCircleFill />
  },
];

const LinkItem = ( {item} ) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(item.link);
  }

  return (
    <div className='home-link-item kids-font' onClick={handleClick}>
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
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/', title: 'Page: Home' });
  }, [])
  // useSendPageview('Home Page');

  const orientation = useOrientation();

  return (
    <div className="asthma-background menu-module home-module">
      <div className='home-header-container'>
        <h1 className={`home-headers-${orientation}`}>Asthma</h1>
        <h1 className={`kids-font home-headers-${orientation}`}>FOR KIDS</h1>
      </div>
      <div className='home-gray-container transparent-container'>
        <HomeLinks items={linkItems}/>
      </div>
    </div>
  );
};

export default Home;
