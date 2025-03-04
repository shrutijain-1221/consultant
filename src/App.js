import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Service from './Service';
import Home from './Home';
import Package from './Package';
import Contact from './Contact';

import Footer from './Footer';
 
function App() {
  return (
    <Router  basename="/consultant">
    <div className="App">
      <Header />
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/packages" element={<Package/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
 
      <Footer />
    </div>
</Router>
  );
}
 
export default App;

