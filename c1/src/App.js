
import './App.css';
import Data from './data';
import  HomePage from './pages/HomePage';
import NavBar from './pages/NavBar';
import Shop from './pages/Shop'; 

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

    </div>
  );
}

export default App;
