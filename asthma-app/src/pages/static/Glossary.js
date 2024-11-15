import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';
import ReactGA from 'react-ga4';


const Glossary = () => {
  // GA Glossary pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/glossary', title: 'Page: Glossary' });
  }, [])
  // useSendPageview('Glossary Page');

  const orientation = useOrientation();

  return (
    <div className="asthma-background menu-module">
      <div className="asthma-red menu-navbar">
        <TopBar oneLine='Glossary' orientation={orientation}/>
      </div>
      <div className='home-gray-container padding-5'>
        <p style={{
          fontSize: window.innerHeight * 0.022,
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Glossary;
