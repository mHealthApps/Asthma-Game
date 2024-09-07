import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar'
import ListGrid from '../../components/ListGrid';
import useOrientation from '../../hooks/useOrientation';
import { useNavigate } from 'react-router-dom';


const items = [
  {
    text: 'The Lungs',
    link: '/the-lungs',
  },
  {
    text: 'About Asthma',
    link: '/about-asthma',
  },
  {
    text: 'Treatment',
    link: '/asthma-treatment',
  },
  {
    text: 'Management',
    link: '/asthma-management',
  },
  {
    text: 'First Aid Emergency',
    link: '/first-aid',
  },
  {
    text: 'Keeping a healthy lifestyle',
    link: '/healthy-lifestyle',
  },
];

const AsthmaList = (list) => {
  const orientation = useOrientation();
  const navigate = useNavigate();

  return (
    <div className="list-module">
      <div className="asthma-red">
        <TopBar barWidth='' conditionTitle='ASTHMA' orientation={orientation} />
      </div>
      <ListGrid items={items} conditionTitle='ASTHMA' orientation={orientation} />
    </div>
  );
};

export default AsthmaList;
