// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Diagnostics from './pages/Diagnostics.jsx';
import ECommerce from './pages/Ecommerce.jsx';
import Consultation from './pages/Consultation.jsx';
import Index from './pages/Index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
