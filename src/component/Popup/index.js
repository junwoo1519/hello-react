import React from "react";
import styled from "styled-components";
import {CgCloseR} from "react-icons/all";

const Popup = ({closePopup}) => {
    return (
        <Container>
            <Content>
                <h2>Lorem ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt ea expedita illo, laudantium
                    magni molestias praesentium quis sint. Esse excepturi id ipsum, laborum nemo nulla sequi? Mollitia,
                    natus, necessitatibus.</p>
                <ButtonClose onClick={closePopup}>
                    <CgCloseR/>
                </ButtonClose>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  justify-content: center;
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
    margin-bottom: 10px;

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