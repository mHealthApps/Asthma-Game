import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';


const AboutUs = () => {
  const orientation = useOrientation();


  return (
    <div className="about-us-module asthma-red">
      <TopBar barWidth='' conditionTitle='' orientation={orientation} />
      No info for about us page for now
    </div>
  );
};

export default AboutUs;
