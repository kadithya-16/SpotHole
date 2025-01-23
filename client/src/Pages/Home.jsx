import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Upload from '../components/Upload.jsx';
import Footer from '../components/Footer.jsx';


function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Upload />
      <Footer />
    </>
  );
}

export default Home;
