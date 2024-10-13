import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';
import useSendPageview from '../../hooks/useSendPageview';


const AboutUs = () => {
  // GA Glossary pageview
  useSendPageview('About Us Page');

  const orientation = useOrientation();

  return (
    <div className="about-us-module asthma-red">
      <TopBar oneLine='About Us' orientation={orientation} />
      No info for about us page for now
    </div>
  );
};

export default AboutUs;
