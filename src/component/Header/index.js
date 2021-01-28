import React, {useState} from "react";
import styled from "styled-components";
import SideMenu from "../SideMenu";
import {AiOutlineMenuUnfold} from "react-icons/all";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";

const Header = () => {

    const dispatch = useDispatch();
    const {sideMenu} = useSelector(state => state)

    const handleSideMenu = () => dispatch(Action.Creators.updateState(!sideMenu))

    return (
        <>
            <Container>
                <Logo>Logo</Logo>
                <Gnb>
                    <Nav>
                        <NavItem to={`/`}>home</NavItem>
                        <NavItem to={`/todo`}>todo</NavItem>
                        <NavItem to={`/photo`}>photo</NavItem>
                    </Nav>
                    <ButtonMenu onClick={handleSideMenu}>
                        <AiOutlineMenuUnfold/>
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
  background-color: #fff;
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