import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/home';
import { NavBar, Features, Testimonials, Subscribe, Footer, ProblemSolution } from './components';

function App() {
  return (
    <>
      <div className="App container mx-auto">
        <NavBar />
        <Home />
      </div>
      <ProblemSolution />
      <Features />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
