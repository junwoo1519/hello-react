import React, {useState} from "react";
import styled from "styled-components";
import {CgMenuMotion} from "react-icons/all";
import SideMenu from "../SideMenu";
import {Link, useHistory} from "react-router-dom";

const Header = () => {

    const [sideMenu, setSideMenu] = useState(false)
    const handleSideMenu = () => {
        setSideMenu(!sideMenu);
    }

    const history = useHistory();
    const navigate = (url) => {
        history.push(url);
    }



    return (
        <>
            <Container>
                <Logo>Logo</Logo>
                <Gnb>
                    <Nav>
                        <NavItem to={'/'}>home</NavItem>
                        <NavItem to={'/todo'}>todo</NavItem>
                        <NavItem to={'/photo'}>photo</NavItem>
                        <NavItem to={'/video'}>video</NavItem>
                        <NavItem to={'/user'}>user</NavItem>
                    </Nav>
                    <ButtonMenu onClick={handleSideMenu}>
                        <CgMenuMotion/>
                    </ButtonMenu>
                </Gnb>
            </Container>

            <SideMenu open={sideMenu}/>
        </>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  box-shadow: 1px 1px 10px #000;
`;

const Logo = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
`;

const Nav = styled.div`
  display: flex;

`;

const NavItem = styled(Link)`
  height: 70px;
  padding: 0 30px;
  display: flex;
  align-items: center;

  color: #333;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
`;

const Gnb = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonMenu = styled.div`
  display: flex;
  font-size: 22px;
  padding: 10px;
  cursor: pointer;
  margin-left: 20px;
`;

export default Header;