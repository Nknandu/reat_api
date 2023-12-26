import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Facts from './components/Facts';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const user = {
    'name' : 'Nandakumar',
    'email': 'nandakumarnk077@gmail.com'
  } 

  return (
    <div>
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <ToastContainer />
      <Header></Header>
      <Hero user_temp = { user }  ></Hero>
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
