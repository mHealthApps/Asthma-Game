import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';
import ReactGA from 'react-ga4';


const Resources = () => {
  // GA Resources pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/resources', title: 'Resources Page' });
  }, [])
  // useSendPageview('Resources Page');

  const orientation = useOrientation();

  return (
    <div className="resources-module asthma-red">
      <TopBar oneLine='Resources' orientation={orientation} />
      No info for resources for now
    </div>
  );
};

export default Resources;
