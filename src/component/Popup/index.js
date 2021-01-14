import React from "react";
import styled from "styled-components";
import {RiMailCloseLine} from "react-icons/all";

const Popup = (props) => {

    const {closePopup} = props

    return (
        <Container>
            <Content>
                <h1>Lorem ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad consequuntur cum dignissimos
                    doloremque eos eum impedit, maxime mollitia nihil officia omnis placeat, quasi quibusdam quos
                    similique tempore voluptas, voluptate!</p>
                <ButtonClose onClick={closePopup}>
                    <RiMailCloseLine/>
                </ButtonClose>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 400px;
  padding: 30px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  background-color: #fff;
  position: relative;

  h1 {
    font-size: 26px;
    margin-bottom: 30px;
  }

  p {
    font-size: 20px;
    line-height: 1.5;
    color: #666;
  }
`;

const ButtonClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
`;

export default Popup;