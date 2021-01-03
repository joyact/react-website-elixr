import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 1rem 2rem;
  background-color: #000;
`;

const Logo = styled(Link)`
  color: #fff;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div``;

const NavMenuLinks = styled(Link)`
  color: #fff;
`;

function Navbar() {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
}

export default Navbar;