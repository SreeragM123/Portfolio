import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Pages from './Pages';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
