import './App.css';
import React from 'react';
import Navbar from './components-home/Nav';
import Home from './Home';
import About from './About';
import Project from './Project';
import Resume from './Resume';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
  return ( 
    <Router>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/projects" element={<Project/>}/>




     </Routes>

    </Router>



   
    
  );
}

export default App;
