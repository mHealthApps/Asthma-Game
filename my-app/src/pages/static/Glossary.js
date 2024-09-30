import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';


const Glossary = () => {
  const orientation = useOrientation();

  return (
    <div className="glossary-module asthma-red">
      <TopBar barWidth='' conditionTitle='' orientation={orientation} />
      No info for glossary for now
    </div>
  );
};

export default Glossary;
