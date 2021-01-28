import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

import PageTitle from "../../component/Title/PageTitle";
import Popup from "../../component/Popup";
import {Action} from "../../redux/reducer";

const Home = () => {

    const dispatch = useDispatch();
    const {count, popup} = useSelector(state => state);


    const countUp = () => {
        if (count >= 10) return;
        dispatch(Action.Creators.updateState({count: count + 1}))
    }

    const countDown = () => {
        if (count === 1) return;
        dispatch(Action.Creators.updateState({count: count - 1}))
    }

    const openPopup = () => {
        dispatch(Action.Creators.updateState(true))
    }

    const closePopup = () => {
        dispatch(Action.Creators.updateState(false))
    }

    return (
        <Container>
            <PageTitle text={"Page Home"}/>
            <Count>{count}</Count>
            <Buttons>
                <Button onClick={countUp}>+</Button>
                <Button onClick={countDown}>-</Button>
            </Buttons>

            <ButtonPopup onClick={openPopup}>Popup</ButtonPopup>

            {
                popup &&
                <Popup closePopup={closePopup}/>
            }
        </Container>
    )
}

const Container = styled.div`
  padding: 100px 0;
`;

const Count = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 30px 0;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  margin: 0 5px;
  font-size: 26px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ButtonPopup = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #18f;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  margin: 40px auto;
`;

export default Home;