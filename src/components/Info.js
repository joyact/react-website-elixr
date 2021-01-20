import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const InfoSection = styled.section``;
const Container = styled.div``;
const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;

function Info() {
  return (
    <InfoSection>
      <Container>
        <ColumnLeft>
          <h1>heading</h1>
          <p>paragraph</p>
          <p>paragraph</p>
          <Button to="/homes">label</Button>
        </ColumnLeft>
        <ColumnRight>
          <img src="" alt="home" />
        </ColumnRight>
      </Container>
    </InfoSection>
  );
}

export default Info;
