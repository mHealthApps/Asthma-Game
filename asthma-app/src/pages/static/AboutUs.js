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
    <div className="about-us-module asthma-red">
      <TopBar oneLine='About Us' orientation={orientation} />
      No info for about us page for now
    </div>
  );
};

export default AboutUs;
