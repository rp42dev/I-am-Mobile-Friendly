import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Transform from './pages/transform';
import Budget from './pages/budget';
import Custom from './pages/custom';
import NotFound from './pages/NotFound'; // Import your custom 404 page
import { NavBar, Footer } from './components';
import ThemeProvider from './ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <div className=" bg-base-300">
          <div className="App relative">
            <Router>
              <NavBar />
              <div className="container mx-auto">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/mobile-website-transformation' element={<Transform />} />
                  <Route path='/budget-web-development' element={<Budget />} />
                  <Route path='/custom-web-development' element={<Custom />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </div>
            </Router>
            <Footer />
            <div className="bg-pattern"></div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
