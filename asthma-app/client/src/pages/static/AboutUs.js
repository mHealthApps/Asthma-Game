import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';
import ReactGA from 'react-ga4';


const AboutUs = () => {
  // GA Glossary pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/about-us', title: 'Page: About Us' });
  }, [])
  // useSendPageview('About Us Page');

  const orientation = useOrientation();

  return (
    <div className="asthma-background menu-module">
      <div className="asthma-red menu-navbar">
        <TopBar oneLine='About Us' orientation={orientation}/>
      </div>
      <div className='home-gray-container padding-5'>
        <p style={{
          fontSize: window.innerHeight * 0.022,
        }}>Originally developed by a team of Australian lung researchers at Menzies School of Health Research to improve lung health knowledge among Aboriginal and Torres Strait Island communities, Assistant Professor Donna-Marie Palakiko worked with Associate Professor Gabrielle McCallum to adapt the original Lung Health Tool to Hawaii and the greater Pacific.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
