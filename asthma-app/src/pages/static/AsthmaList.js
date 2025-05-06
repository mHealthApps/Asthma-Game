import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar'
import ListGrid from '../../components/ListGrid';
import useOrientation from '../../hooks/useOrientation';
import ReactGA from 'react-ga4';
import WhiteShirt_Girl_Lungs_10 from '../../assets/images/10_WhiteShirt_Girl_Lungs.jpg';
import OrgShirt_Girl_Bending_2 from '../../assets/images/2_OrgShirt_Girl_Bending.jpg';
import All_Inhalers_23 from '../../assets/images/23_All Inhalers_v2.jpg';
import TealShirt_Girl_Coughing_4 from '../../assets/images/4_TealShirt_Girl_Coughing.jpg';
import Ambulance_36 from '../../assets/images/36_Ambulance.jpg';
import OrgShirt_Girl_Sitting_5 from '../../assets/images/5_OrgShirt_Girl_Sitting.jpg';


const items = [
  {
    image: WhiteShirt_Girl_Lungs_10,
    alt: 'lungs',
    text: 'The Lungs',
    link: '/the-lungs',
  },
  {
    image: OrgShirt_Girl_Bending_2,
    alt: 'Girl in Orange Shirt',
    text: 'About Asthma',
    link: '/about-asthma',
  },
  {
    image: All_Inhalers_23,
    alt: 'All Inhalers',
    text: 'Treatment',
    link: '/asthma-treatment',
  },
  {
    image: TealShirt_Girl_Coughing_4,
    alt: 'Teal Shirt Girl Coughing',
    text: 'Management',
    link: '/asthma-management',
  },
  {
    image: Ambulance_36,
    alt: 'Ambulance',
    text: 'First Aid Emergency',
    link: '/first-aid',
  },
  {
    image: OrgShirt_Girl_Sitting_5,
    alt: 'Orange Shirt Girl Sitting',
    text: 'Keeping a healthy lifestyle',
    link: '/healthy-lifestyle',
  },
];

const AsthmaList = ({ setUserName }) => {
  // GA Glossary pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/asthma-list', title: 'Page: Asthma List' });
  }, [])
  // useSendPageview('Asthma Content List');

  const orientation = useOrientation();

  return (
    <div className="list-module">
      <div className="asthma-red">
        <TopBar barWidth='' oneLine='Asthma Education' orientation={orientation} />
      </div>
      <ListGrid items={items} conditionTitle='ASTHMA' orientation={orientation} setUserName={setUserName} />
    </div>
  );
};

export default AsthmaList;
