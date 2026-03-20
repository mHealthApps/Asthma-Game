import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import ReactGA from 'react-ga4';
import useOrientation from '../../hooks/useOrientation';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  // GA Login pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/login', title: 'Page: Login' });
  }, [])

  const orientation = useOrientation();

  return (
    <div className="asthma-background menu-module">
      <div className="asthma-red menu-navbar">
        <TopBar oneLine='Login' orientation={orientation}/>
      </div>

      <div className='login-header-container'>
        
        <LoginForm />

      </div>
    </div>
  );
}

export default Login;