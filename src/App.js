import React from 'react';

import './App.css';
import Part from '../Components/Part';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Part />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
