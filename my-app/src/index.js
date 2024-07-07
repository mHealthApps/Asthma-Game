import React, { useCallback, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import ListPage from "./pages/ListPage";
import DemoStacked from './pages/DemoStacked';


function App() {
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
        <Route exact path="/" element={<DemoStacked />} />
        <Route path="/list-page" element={<ListPage />} />
        <Route path="/stacked-demo" element={<DemoStacked />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
