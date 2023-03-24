import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Promo from './pages/Promo';
import Add from './pages/Add';
import Dashboard from './pages/Dashboard';

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="promo" element={<Promo />} />
        <Route path="add" element={<Add />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
