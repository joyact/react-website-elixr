import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

function Hero() {
  return (
    <HeroSection>
      <HeroWrapper>
        <h1>HERORO</h1>
      </HeroWrapper>
    </HeroSection>
  );
}

export default Hero;
