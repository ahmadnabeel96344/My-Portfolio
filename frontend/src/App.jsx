import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';  // Import ThemeProvider
import Hero from './pages/Hero';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import ThemeToggle from './components/ThemeToggle';  // Import ThemeToggle component

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-500">
          {/* <ThemeToggle /> */}
          <Hero />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
