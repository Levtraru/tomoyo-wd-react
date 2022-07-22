import React from 'react';
import './index.css';import { createRoot } from 'react-dom/client';
import App from './App';
import PaginaProductos from './components/PaginaProductos';
import Tienda from './components/Tienda/Tienda';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Producto from './components/Producto';
import Registro from './components/Registro';
import Login from './components/Login';
import Chango from './components/Chango';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tienda" element={<Tienda />} />
      <Route path="productos" element={<PaginaProductos />} />
      <Route path="producto" element={<Producto />} />
      <Route path="registro" element={<Registro />} />
      <Route path="login" element={<Login />} />
      <Route path="chango" element={<Chango />} />
    </Routes>
  </BrowserRouter>
);