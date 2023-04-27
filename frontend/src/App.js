import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Transform from './pages/transform';
import { NavBar, Footer } from './components';
import ThemeProvider from './ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App relative">
          <div className="container mx-auto">
            <Router>
            <NavBar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/transform' element={<Transform />} />
              </Routes>
            </Router>
          </div>
          <div className="bg-pattern"></div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
