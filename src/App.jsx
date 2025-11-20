import React from 'react';
// Import routing components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home'; // We'll rename the first section component
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import './style.css'; 

function App() {
  return (
    // 1. Wrap the entire app in the Router
    <Router>
      <div className="App">
        {/* The Header is outside the Routes so it appears on all pages */}
        <Header />

        {/* 2. Define the Routes */}
        <Routes>
          {/* Default path '/' for the Home page */}
          <Route path="/" element={<Home />} />
          
          {/* Routes for the other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* The Footer is outside the Routes so it appears on all pages */}
        <footer>© 2025 Rupal Devi | All Rights Reserved</footer>
      </div>
    </Router>
  );
}

export default App;