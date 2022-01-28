import React, { Component }  from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/home" element={<Home/>}>
          </Route>
          <Route path="/appoinment" element={<Appoinment/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/register" element={<Register/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
