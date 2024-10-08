import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';
import useSendPageview from '../../hooks/useSendPageview';


const Resources = () => {
  // GA Resources pageview
  useSendPageview();

  const orientation = useOrientation();

  return (
    <div className="resources-module asthma-red">
      <TopBar oneLine='Resources' orientation={orientation} />
      No info for resources for now
    </div>
  );
};

export default Resources;
