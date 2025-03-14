import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import React, { useEffect } from 'react';
import Congratulations from '../../components/Congratulations';
import Lungs_Anatomy_25 from '../../assets/images/25_Lungs_Anatomy.jpg';
import ReactGA from 'react-ga4';


const CongratulationsPage = ({ userName }) => {
  // GA CongratsPage pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/congratulations', title: 'Page: Congratulations' });
  }, [])
  // useSendPageview('Congratulations Page');

  return (
    <div className="asthma-background">
      <Congratulations image={Lungs_Anatomy_25} alt="lungs-wide"  buttonLink="/asthma-list" conditionTitle="ASTHMA" userName={userName} />
    </div>
  );
}

export default CongratulationsPage;
