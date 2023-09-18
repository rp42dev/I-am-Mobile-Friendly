import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home, Transform, Budget, Custom, About, NotFound, Success, Funnels } from './pages';
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
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/budget-web-development' element={<Budget />} />
                <Route path='/funnels' element={<Funnels />} />
                <Route path='/custom-web-development' element={<Custom />} />
                <Route path='/about-me' element={<About />} />
                <Route path='/contact-success' element={<Success />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
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
