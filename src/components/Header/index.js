import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <Logo>Logo</Logo>
            <Nav>
                <NavItem>home</NavItem>
                <NavItem>todo</NavItem>
                <NavItem>photo</NavItem>
                <NavItem>video</NavItem>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.13);
`

const Logo = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
`

const Nav = styled.div`
  display: flex;
`

const NavItem = styled.div`
  height: 70px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  color: #333;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
`
export default Header;