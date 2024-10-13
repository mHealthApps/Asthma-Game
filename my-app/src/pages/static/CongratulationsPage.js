import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import React from 'react';
import Congratulations from '../../components/Congratulations';
import useSendPageview from '../../hooks/useSendPageview';


const CongratulationsPage = () => {
  // GA CongratsPage pageview
  useSendPageview('Congratulations Page');

  return (
    <div className="asthma-red">
      <Congratulations image='templateLungs' alt="lungs-wide"  buttonLink="/asthma-list" conditionTitle="ASTHMA" />
    </div>
  );
}

export default CongratulationsPage;
