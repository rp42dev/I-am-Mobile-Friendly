import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home, Budget, Custom, About, NotFound, Success, Funnels } from './pages';
import { Drawer, NavBar, Footer } from './components';
import ThemeProvider from './ThemeProvider';


function App() {
  return (
    <>
      <ThemeProvider>
        <div className=" bg-base-300">
          <div className="App relative">
            <Drawer>
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
            </Drawer>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
