import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import Logo from './Logo'
import styled from "styled-components"
import "typeface-open-sans"
import { breakpoints } from "./Breakpoints"

const NavContainer = styled.div`
  width: 100vh;
  height: 80px;
  position: fixed;
  transform-origin: 0 0;
  transform: rotate(-90deg) translateX(-100%);
  margin-left: 15px;
  top: 70px;

  @media (max-width: ${breakpoints.mobileMax}) {
    display: none;
  }
`;

const MainNavigationUl = styled.ul`
  margin: 0 auto;
  height: 100%;
`;

const MainNavigationLi = styled.li`
  list-style-type: none;
  margin-right: 20px;
  float: right;
  height: 100%;
  line-height: 45px;
`;

const MainNavigation = styled(Link)`
  color: black;
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
  transition: 0.3s ease;

  :hover{
    text-decoration: none;
    color: #0077ff;
  }

`;

const Header = ({ menuLinks }) => (

  
  <header>
    <Link title='Home' to='/'>
        <Logo />
    </Link>
  <NavContainer>
    <nav>
       <MainNavigationUl>
          {menuLinks.map(link => (
            <MainNavigationLi key={link.name}>
              <MainNavigation 
                to={link.link}>
                {link.name}
              </MainNavigation>
            </MainNavigationLi>
          ))}
        </MainNavigationUl>
    </nav>
    </NavContainer>
  </header>
)

export default Header
