import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import ListPage from "./pages/ListPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<></>} />
        <Route path="./my-app/list-page" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
