import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import ListPage from "./pages/ListPage";
import DemoStacked from './pages/DemoStacked';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<></>} />
        <Route path="/Asthma-WebApp/list-page" element={<ListPage />} />
        <Route path="/Asthma-WebApp/stacked-demo" element={<DemoStacked />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
