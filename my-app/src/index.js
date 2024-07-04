import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import ListPage from "./pages/ListPage";
import DemoStacked from './pages/DemoStacked';


function App() {
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
