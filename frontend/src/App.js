import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/home';
import { NavBar, Features, Testimonials, Contact, Footer, ProblemSolution, Why } from './components';

function App() {
  return (
    <>
      <div className="App relative">
        <div className="container mx-auto">
          <NavBar />
          <Home />
        </div>
        <div className="bg-pattern"></div>
      <ProblemSolution />
      <Why />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
      </div>
    </>
  );
}

export default App;
