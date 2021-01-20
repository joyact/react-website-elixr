import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyle from './globalStyles';
import { SliderOne } from './data/SliderData';
import Dropdown from './components/Dropdown';
import Info from './components/Info';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderOne} />
      <Info />
    </>
  );
}

export default App;
