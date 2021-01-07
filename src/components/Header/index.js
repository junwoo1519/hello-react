import React, {useState} from "react";
import styled from "styled-components";
import {Link, useHistory} from "react-router-dom";
import SideMenu from "../SideMenu";
import {IoMenu} from "react-icons/all";

const Header = () => {

    const history = useHistory();
    const navigate = (url) => {
        history.push(url);
    }
    const [sideMenu, setSideMenu] = useState(false);
    const handleSideMenu = () => {
        setSideMenu((v) => !v);
    }

    return (
        <>
            <Container>
                <Logo>Logo</Logo>
                <Gnb className={"Gnb"}>
                    <Nav className={"Nav"}>
                        <NavItem to={"/"}>home</NavItem>
                        <NavItem to={"/todo"}>todo</NavItem>
                        <NavItem to={"/photo"}>photo</NavItem>
                        <NavItem to={"/video"}>video</NavItem>
                    </Nav>
                    <ButtonMenu onClick={handleSideMenu}>
                        <IoMenu/>
                    </ButtonMenu>
                </Gnb>
            </Container>

            <SideMenu open={sideMenu}/>
        </>
    )
}

const Container = styled.div`
  display: flex;
  z-index: 1100;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.13);
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
  margin-left: 20px;
  cursor: pointer;
`;
export default Header;