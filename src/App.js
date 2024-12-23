import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MartineHomeScreen from './pages/martine/home';
import MartineQ2Screen from './pages/martine/numberTwo';
import MartineQ3Screen from './pages/martine/numberThree';
import MartineQ4Screen from './pages/martine/numberFour';
import MartineQ5Screen from './pages/martine/lastQuestion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MartineHomeScreen />} />
        <Route path="/martine/er/hoe/sporsmaal2" element={<MartineQ2Screen />} />
        <Route path="/martine/er/hoe/sporsmaal/1/1/1" element={<MartineQ3Screen />} />
        <Route path="/martine/er/hoe/sporsmaal/nummer/4" element={<MartineQ4Screen />} />
        <Route path="/martine/er/hoe/sporsmaal/nummer/final" element={<MartineQ5Screen />} />
      </Routes>
    </Router>
  );
}

export default App;
