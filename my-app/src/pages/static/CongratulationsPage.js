import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import React from 'react';
import Congratulations from '../../components/Congratulations';


const CongratulationsPage = () => {


  return (
    <div className="asthma-red">
      <Congratulations image='templateLungs' alt="lungs-wide"  buttonLink="/asthma-list" conditionTitle="ASTHMA" />
    </div>
  );
}

export default CongratulationsPage;
