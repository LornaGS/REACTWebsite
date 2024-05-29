import React from 'react'
import './App.css';
import Data from './data';
import  HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Shop from './pages/Shop'; 
import ChangeState from './components/ChangeState';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Shop' element={< Shop />} />
        </Routes>
      </BrowserRouter>

      {/* <ChangeState /> */}

    </div>
  );
}

export default App;
