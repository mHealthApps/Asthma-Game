import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';
import ReactGA from 'react-ga4';


const Resources = () => {
  // GA Resources pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/resources', title: 'Page: Resources' });
  }, [])
  // useSendPageview('Resources Page');

  const orientation = useOrientation();

  return (
    <div className="asthma-background menu-module">
      <div className="asthma-red menu-navbar">
        <TopBar oneLine='Resources' orientation={orientation}/>
      </div>
      <div className='home-gray-container padding-5'>
        <p style={{
          fontSize: window.innerHeight * 0.022,
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Resources;
