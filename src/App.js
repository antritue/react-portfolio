import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        {/* <Skills /> */}
        {/* <Contact /> */}
      </main>

      {/* <ScrollToTop /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
