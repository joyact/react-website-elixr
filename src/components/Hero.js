import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

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

const HeroSlider = styled.div``;
const HeroSliderInner = styled.div``;
const HeroImage = styled.img``;
const HeroContent = styled.div``;
const Arrow = styled(IoMdArrowRoundForward)``;
const SliderButtons = styled.div``;
const PrevArrow = styled(IoArrowForward)``;
const NextArrow = styled(IoArrowBack)``;

function Hero({ slides }) {
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlider key={index}>
            <HeroSliderInner>
              <HeroImage />
              <HeroContent>
                <h1>{slide.title}</h1>
                <p>{slide.price}</p>
                <Button
                  to={slide.path}
                  primary="true"
                  style={{ maxWidth: '160px' }}
                >
                  {slide.label}
                  <Arrow />
                </Button>
              </HeroContent>
            </HeroSliderInner>
          </HeroSlider>
        ))}
        <SliderButtons>
          <PrevArrow />
          <NextArrow />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
}

export default Hero;
