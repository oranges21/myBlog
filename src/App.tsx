// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Layout from './layout/index.tsx';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} />
        {/* Other routes */}
      </Routes>
  );
}

export default App;