import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import ListPage from "./pages/ListPage";


function Home() {
    return (
        <div>
            <p>Hello, World!</p>
            <Link to="/list-page">Go to List Page</Link>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/list-page" element={<ListPage />} />
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);