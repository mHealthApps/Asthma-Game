import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';
import useSendPageview from '../../hooks/useSendPageview';
import ReactGA from 'react-ga4';


const Glossary = () => {
  // GA Glossary pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/glossary', title: 'Glossary Page' });
  }, [])
  useSendPageview('Glossary Page');

  const orientation = useOrientation();

  return (
    <div className="glossary-module asthma-red">
      <TopBar oneLine='Glossary' orientation={orientation} />
      No info for glossary for now
    </div>
  );
};

export default Glossary;
