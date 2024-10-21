import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import React from 'react';
import Congratulations from '../../components/Congratulations';
import Lungs_Anatomy_25 from '../../assets/images/25_Lungs_Anatomy.jpg';
import useSendPageview from '../../hooks/useSendPageview';


const CongratulationsPage = () => {
  // GA CongratsPage pageview
  useSendPageview('Congratulations Page');

  return (
    <div className="asthma-background">
      <Congratulations image={Lungs_Anatomy_25} alt="lungs-wide"  buttonLink="/asthma-list" conditionTitle="ASTHMA" />
    </div>
  );
}

export default CongratulationsPage;
