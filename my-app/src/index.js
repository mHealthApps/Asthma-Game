import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import ListPage from "./pages/ListPage";
import StackedPageOne from './pages/StackedPageOne';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<></>} />
        <Route path="/list-page" element={<ListPage />} />
        <Route path="/stacked-page-one" element={<StackedPageOne />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
