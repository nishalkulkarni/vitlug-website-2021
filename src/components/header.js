import React from "react"
import styled from "styled-components"
import Logo from "../images/logo.png"

const Navbar = styled.nav`
  margin: 1.5rem 0;
  border-bottom: 2px dashed #8c8b8b;
`

const NavList = styled.ul`
  flex: 1; 
  display: flex; 
  align-items: center; 
  justify-content: space-around;
  list-style-type: none;

  @media (max-width: 520px) {
    flex-direction: column;  
    gap: 1em;

    li:nth-child(1) { order: 2; }
    li:nth-child(2) { order: 3; }
    li:nth-child(3) { order: 4; }
    li:nth-child(4) { order: 1; }
    li:nth-child(5) { order: 5; }
    li:nth-child(6) { order: 6; }
    li:nth-child(7) { order: 7; }
  }
`

const NavLink = styled.a`
  text-decoration: none;
  color: #282828;
  font-weight: 600;

  &:hover {
    text-decoration: underline; 
  }
`

const NavbarLogo = styled.img`
  height: 81px;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.1,1.1);
  }
`

const Header = () => {
    return (
        <Navbar>
            <NavList>
                <li><NavLink href="#about">About</NavLink></li>
                <li><NavLink href="#blog">Blog</NavLink></li>
                <li><NavLink href="#board">Board</NavLink></li>
                <li><NavLink href="/"><NavbarLogo src={Logo} alt="VIT-LUG logo" /></NavLink></li>
                <li><NavLink href="#projects">Projects</NavLink></li>
                <li><NavLink href="#contact">Contact</NavLink></li>
                <li><NavLink href="#terminal">Terminal</NavLink></li>
            </NavList>
        </Navbar>
    )
}

export default Header