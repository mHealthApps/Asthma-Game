import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import ListPage from "./pages/ListPage";
import DemoStacked from './pages/DemoStacked';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<></>} />
        <Route path="/list-page" element={<ListPage />} />
        <Route path="/stacked-demo" element={<DemoStacked />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
