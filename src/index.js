import React from 'react';
import './index.css';import { createRoot } from 'react-dom/client';
import App from './App';
import Tienda from './components/Tienda/Tienda';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tienda" element={<Tienda />} />
    </Routes>
  </BrowserRouter>
);