import './App.css';
import React from 'react';
import Navbar from './components-home/Nav';
import Home from './Home';
import About from './About';
import Project from './Project';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
  return ( 
    <Router>
     <Navbar/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/home" element={<Home/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/projects" element={<Project/>}/>




     </Routes>

    </Router>



   
    
  );
}

export default App;
