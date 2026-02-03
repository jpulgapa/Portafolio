import './App.module.css';
import './utils/theme.css';
import Contact from './components/Contact/Contact';
import Features from './components/Features/Features';
import Header from './components/Head/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import ParticlesBG from './components/ParticlesBG.js';

function App() {
  return (
    <>
      <ParticlesBG />
      <Header />
      <Hero />
      <main>
        <Features />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
