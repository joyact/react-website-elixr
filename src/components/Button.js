import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: ${({ primary }) => (primary ? '#000d1a' : '#cd853f')};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};

  &:hover {
    transform: translateY(-2px);
  }
`;
