import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyle from './globalStyles';
import { SliderOne } from './data/SliderData';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderOne} />
    </>
  );
}

export default App;
