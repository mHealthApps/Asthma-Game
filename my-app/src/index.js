import React, { useCallback, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import AsthmaList from "./pages/static/AsthmaList";
import DemoStacked from './pages/DemoStacked';
import DemoQuiz from './pages/DemoQuiz';
import DemoSummary from './pages/DemoSummary';
import DemoCongratulations from './pages/DemoCongratulations';
import TheLungs from './pages/interactive/TheLungs';
import AboutAsthma from './pages/interactive/AboutAsthma';
import AsthmaTreatment from './pages/interactive/AsthmaTreatment';
import AsthmaManagement from './pages/interactive/AsthmaManagement';
import FirstAid from './pages/interactive/FirstAid';
import HealthyLifestyle from './pages/interactive/HealthyLifestyle';
import CongratulationsPage from './pages/static/CongratulationsPage';

const storageData = [
  {
    key: 'asthmaList',
    defaultValue: '000000',
  },
];



function App() {
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
  }, []);

  useEffect(() => {
    setVerticalScaling();
    window.addEventListener('resize', setVerticalScaling);
    return () => window.removeEventListener('resize',setVerticalScaling);
  }, [setVerticalScaling])

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<AsthmaList />} />
        <Route path="/asthma-list" element={<AsthmaList />} />
        <Route path="/stacked-demo" element={<DemoStacked />} />
        <Route path="/quiz-demo" element={<DemoQuiz />} />
        <Route path="/summary-demo" element={<DemoSummary />} />
        <Route path="/congratulations-demo" element={<DemoCongratulations />} />
        <Route path="/the-lungs" element={<TheLungs />} />
        <Route path="/about-asthma" element={<AboutAsthma />} />
        <Route path="/asthma-treatment" element={<AsthmaTreatment />} />
        <Route path="/asthma-management" element={<AsthmaManagement />} />
        <Route path="/first-aid" element={<FirstAid />} />
        <Route path="/healthy-lifestyle" element={<HealthyLifestyle />} />
        <Route path="/congratulations" element={<CongratulationsPage />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
