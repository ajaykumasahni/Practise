import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Candidates from './pages/Candidates';
import CandidateDetails from './pages/CandidateDetails';
import AdversePopUp from './pages/AdversePop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Candidates />} />
        <Route path="/details" element={<CandidateDetails />} />
        <Route path="/adverse" element={<AdversePopUp />} />
      </Routes>
    </Router>
  );
}

export default App;
