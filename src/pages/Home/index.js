import React, {useState} from "react";
import styled from "styled-components";
import PageTitle from "../../component/Title/PageTitle";
import Popup from "../../component/Popup";

const Home = () => {

    const [count, setCount] = useState(1)
    const [popup, setPopup] = useState(false)

    const countUp = () => {
        if (count >= 10) return;
        setCount(count + 1)
    }

    const countDown = () => {
        if (count === 1) return;
        setCount(count - 1)
    }

    const handlePopup = (v) => {
        setPopup(v);
    }

    return (
        <Container>
            <PageTitle text={"page home"}/>
            <Count>{count}</Count>
            <Buttons>
                <Button onClick={countUp}>+</Button>
                <Button onClick={countDown}>-</Button>
            </Buttons>

            <ButtonPopup onClick={() => {handlePopup(true)
            }}>팝업 보기</ButtonPopup>

            {
                popup && <Popup closePopup={() => handlePopup(false)}/>
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ButtonPopup = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #18f;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  margin: 40px auto;
`;

export default Home;