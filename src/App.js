import React, { useRef } from 'react';
import '../src/css/app.scss';
import '../src/css/font-awesome.min.css';
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Contact from '../src/components/Contact';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';


function App() {
  return (
      <div className="App">
        <Nav />
        <main>
        <h1>I am <span>Saguna Tailor</span></h1>
          <About/>
          <Skills />
          <Portfolio />
          <Experience />
          <Contact />
        </main>
      </div>
  );
}

export default App;
