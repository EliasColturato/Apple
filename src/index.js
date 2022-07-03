import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TestePage from './pages/TestePage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InstitucionalPage from './pages/InstitucionalPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teste" element={<TestePage />} />
        <Route path="/institucional" element={<InstitucionalPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
