import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';


const Resources = () => {
  const orientation = useOrientation();

  return (
    <div className="resources-module asthma-red">
      <TopBar oneLine='Resources' orientation={orientation} />
      No info for resources for now
    </div>
  );
};

export default Resources;
