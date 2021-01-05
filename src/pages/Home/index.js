import React, {useState} from "react";
import styled from "styled-components";
import PageTitle from "../../components/Title/PageTitle";

const Home = () => {

    const [count, countSet] = useState(1)

    const countUp = () => {
        if (count >= 10) return;
        countSet(count + 1)
    }

    const countDown = () => {
        if (count === 1) return;
        countSet(count - 1)
    }

    return (
        <Container>
            <PageTitle text={"Page Home"}/>
            <Count>{count}</Count>
            <Buttons>
                <Button onClick={countUp}>+</Button>
                <Button onClick={countDown}>-</Button>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    padding: 100px;
`

const Count = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 30px 0;
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid #000;
  margin: 0 5px;
  font-size: 26px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }
`

export default Home;