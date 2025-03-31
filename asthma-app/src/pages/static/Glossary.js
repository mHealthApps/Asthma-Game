import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';
import ReactGA from 'react-ga4';


const Glossary = () => {
  // GA Glossary pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/glossary', title: 'Page: Glossary' });
  }, [])
  // useSendPageview('Glossary Page');

  const orientation = useOrientation();

  return (
    <div className="asthma-background menu-module">
      <div className="asthma-red menu-navbar">
        <TopBar oneLine='Glossary' orientation={orientation}/>
      </div>
      <div className='home-gray-container padding-5'>
        <div className='resources-content' style={{
          fontSize: window.innerHeight * 0.022,
        }}>
          <div className='glossary-item'>
            <div className='glossary-content-title'>Windpipe</div> - the air passage from the throat, also known as the trachea
          </div>
          <div className='glossary-item'>
            <div className='glossary-content-title'>Bronchus</div> - major air passage of the lung which diverge from the windpipe
          </div>
          <div className='glossary-item'>
            <div className='glossary-content-title'>Bronchioles</div> - tiny branches into which the bronchus divides
          </div>
          <div className='glossary-item'>
            <div className='glossary-content-title'>Alveoli</div> - tiny air sacs in the lungs which allows for gaseous exchange
          </div>
          <div className='glossary-item'>
            <div className='glossary-content-title'>Lungs</div> - a major organ of the respiratory system, located in the rib cage and allows the exchange of oxygen and carbon dioxide through the bloodstream
          </div>
          <br/>
          <div className='glossary-item'>
            <div className='glossary-content-title'>Rescue Inhaler</div> - quick relief medication; often used as needed or in emergency situations to relieve shortness of breath, wheezing, and chest tightness.
          </div>
          <div className='glossary-item'>
            <div className='glossary-content-title'>Long-acting Inhaler</div> - used to control asthma symptoms.
          </div>
          <div className='glossary-item'>
            <div className='glossary-content-title'>Combination Inhaler</div> - contains two or more active ingredients inhaled together to treat respiratory conditions such as asthma
          </div>
          <br/>
          <div className='glossary-item'>
            <div className='glossary-content-title'>Hano</div> – asthma
          </div>
          <div className='glossary-item'>
            <div className='glossary-content-title'>‘Ohana</div> – family
          </div>
          <div className='glossary-item'>
            <div className='glossary-content-title'>Keiki</div> – child
          </div>
          <div className='glossary-item'>
            <div className='glossary-content-title'>Uma</div> - chest
          </div>
          <div className='glossary-item'>
            <div className='glossary-content-title'>VOG</div> – volcanic smog
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glossary;
