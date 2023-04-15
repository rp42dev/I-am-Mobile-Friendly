import React, { useState, useEffect } from 'react';
import './App.css';
import SendEmailForm from './components/SendEmailForm';
import Home from './pages/home';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Features from './components/Features';

function App() {
  return (
    <>
      <div className="App container mx-auto">
        <NavBar />
        <Home />
        <Features />
      </div>
      <Footer />
    </>
  );
}

export default App;
