import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MartineHomeScreen from './pages/martine/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MartineHomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
