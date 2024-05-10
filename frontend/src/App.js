import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home, Budget, Custom, NotFound, Success } from './pages';
import { Drawer, NavBar, Footer } from './components';
import ThemeProvider from './ThemeProvider';
import { ContextProvider } from "./ContextProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <ContextProvider>
          <div className=" bg-base-300">
            <div className="App relative">
              <Drawer>
                <Router>
                  <NavBar />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/budget-web-development' element={<Budget />} />
                    <Route path='/custom-web-development' element={<Custom />} />
                    <Route path='/contact-success' element={<Success />} />
                    <Route path='*' element={<NotFound />} />
                  </Routes>
                </Router>
                <Footer />
              </Drawer>
            </div>
          </div>
        </ContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
