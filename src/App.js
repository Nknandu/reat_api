import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Facts from './components/Facts';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    //-- ======= Mobile nav toggle button ======= -->
    //
    <div>
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <Header></Header>
      <Hero></Hero>
      <main id="main">
        <About></About>
        <Facts></Facts>
        <Skills></Skills>
        <Resume></Resume>
        <Contact></Contact>
      </main>

    </div>

  );
}

export default App;
