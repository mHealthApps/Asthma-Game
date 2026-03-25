import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import ReactGA from 'react-ga4';
import useOrientation from '../../hooks/useOrientation';
import SignupForm from '../../components/SignupForm';

const Signup = () => {
  // GA Login pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/signup', title: 'Page: Signup' });
  }, [])

  const orientation = useOrientation();

  return (
    
    <div className="asthma-background menu-module">
      <div className="asthma-red menu-navbar">
        <TopBar oneLine='Sign Up' orientation={orientation}/>
      </div>

      <div className='login-header-container'>
        <div className="sound-card">
          <div className="sound-card-inner-container">
            <SignupForm />
          </div>
        </div>

      </div>
    </div>

  );
}

export default Signup;