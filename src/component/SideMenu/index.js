import React from "react";
import styled from "styled-components";
import cn from "classnames";

const SideMenu = ({open}) => {

    return (
        <Container className={cn({open})}>
            SideMenu
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1100;
  width: 320px;
  background-color: #fff;
  padding: 30px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, .15);
  transform: translateX(-110%);
  transition: .4s;

  &.open {
    transform: none;
  }
`;

export default SideMenu;