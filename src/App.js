import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Internship from './components/Internship';
import Project from './components/Project';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Top from './components/Top';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Internship />
      <Project />
      <Contact />
      <Footer />
      <Top />
    </div>
  );
}

export default App;
