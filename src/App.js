import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyle from './globalStyles';
import { SliderOne } from './data/SliderData';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Dropdown />
      <Hero slides={SliderOne} />
    </>
  );
}

export default App;
