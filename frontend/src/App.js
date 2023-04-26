import './App.css';
import Home from './pages/home';
import { NavBar, Features, Testimonials, Contact, Footer, ProblemSolution, Why, How, Projects, Faq } from './components';
import ThemeProvider from './ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
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
          <How />
          <Projects />
          <Contact />
          <Faq />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
