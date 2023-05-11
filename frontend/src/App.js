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
            <div className="container mx-auto">
              <Router>
                <NavBar />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/mobile-website-transformation' element={<Transform />} />
                  <Route path='/budget-web-development' element={<Budget />} />
                  <Route path='/custom-web-development' element={<Custom />} />
                  <Route path='*' element={<NotFound />} /> {/* Fallback route for 404 */}
                </Routes>
              </Router>
            </div>
            <div className="bg-pattern"></div>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
