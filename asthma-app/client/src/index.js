import React, { useCallback, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga4';
import Home from './pages/static/Home';
import Glossary from './pages/static/Glossary';
import AboutUs from './pages/static/AboutUs';
import Resources from './pages/static/Resources';
import SoundChoice from './pages/interactive/SoundChoice';
import AsthmaList from "./pages/static/AsthmaList";
import DemoStacked from './pages/DemoStacked';
import DemoQuiz from './pages/DemoQuiz';
import DemoSummary from './pages/DemoSummary';
import DemoCongratulations from './pages/DemoCongratulations';
import DemoSound from './pages/DemoSound';
import TheLungs from './pages/interactive/TheLungs';
import AboutAsthma from './pages/interactive/AboutAsthma';
import AsthmaTreatment from './pages/interactive/AsthmaTreatment';
import AsthmaManagement from './pages/interactive/AsthmaManagement';
import FirstAid from './pages/interactive/FirstAid';
import HealthyLifestyle from './pages/interactive/HealthyLifestyle';
import CongratulationsPage from './pages/static/CongratulationsPage';
import DemoPixiGame from "./pages/DemoPixiGame";
import Login from "./pages/static/Login";
import Signup from "./pages/static/Signup";
import FlaskTest from "./pages/FlaskTest";
import ProtectedRoute from "./components/ProtectedRoute";
import useToken from "./components/useToken";
import GuestRoute from "./components/GuestRoute";
import { AuthProvider } from "./components/AuthContext";


const storageData = [
  {
    key: 'asthmaList',
    defaultValue: '000000',
  },
];

// Initializing Google analytics
try {
  if (!window.location.href.includes('localhost')) {
    console.log('Google analytics initialized');
    // ReactGA.initialize('G-60FCT87DHZ');
    ReactGA.initialize("G-60FCT87DHZ", {
      gtagOptions: {
        send_page_view: false
      }
    });
    // ReactGA.send({ hitType: 'pageview', page: '/', title: 'Home Page' });
  } else {
    console.log('no analytics initialization due to localhost');
  }
} catch (error) {
  console.error('Google analytics failed: ', error.message);
}

function App() {
  // verticalHeight state to trigger re-render
  const [verticalHeight, setVerticalHeight] = useState(window.innerHeight * 0.01);

  // Initializing localStorage if it does not exist
  useEffect(() => {
    // If reset is true localStorage data will be reset
    const reset = false;
    for (let i = 0; i < storageData.length; i ++) {
      let storageStatus = localStorage.getItem(storageData[i].key);

      if (storageStatus === null || reset) {
        console.log(`reset ${storageData[i].key}`);
        localStorage.setItem(storageData[i].key, storageData[i].defaultValue);
      }
    }
  }, []);

  const setVerticalScaling = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    setVerticalHeight(vh);
  }, []);

  useEffect(() => {
    setVerticalScaling();
    window.addEventListener('resize', setVerticalScaling);
    return () => window.removeEventListener('resize',setVerticalScaling);
  }, [setVerticalScaling])

  useEffect(() => {
    console.log(`re-render triggered. --vh: ${verticalHeight}`);
  }, [verticalHeight])

  const [userName, setUserName] = useState('');

  const { token } = useToken();

  return (
    <Router>
      <Routes>
        // Guest Routes
        <Route element={<GuestRoute token={token} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        // Public Routes
        <Route path="/flasktest" element={<FlaskTest />} />

        // Protected Routes
        <Route element={<ProtectedRoute isAuthenticated={token} />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/sound-choice" element={<SoundChoice />} />
          <Route path="/asthma-list" element={<AsthmaList setUserName={setUserName} />} />
          <Route path="/stacked-demo" element={<DemoStacked />} />
          <Route path="/quiz-demo" element={<DemoQuiz />} />
          <Route path="/summary-demo" element={<DemoSummary />} />
          <Route path="/congratulations-demo" element={<DemoCongratulations />} />
          <Route path="/sound-demo" element={<DemoSound />} />
          <Route path="/game-demo" element={<DemoPixiGame />} />
          <Route path="/the-lungs" element={<TheLungs />} />
          <Route path="/about-asthma" element={<AboutAsthma />} />
          <Route path="/asthma-treatment" element={<AsthmaTreatment />} />
          <Route path="/asthma-management" element={<AsthmaManagement />} />
          <Route path="/first-aid" element={<FirstAid />} />
          <Route path="/healthy-lifestyle" element={<HealthyLifestyle />} />
          <Route path="/congratulations" element={<CongratulationsPage userName={userName} />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
