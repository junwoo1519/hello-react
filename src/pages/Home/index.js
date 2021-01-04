import React, {useState} from "react"
import styled from "styled-components";
import PageTitle from "../../components/Title/PageTitle";

const Home = () => {

    const [count, setCount] = useState(1)

    const countUp = () => {
        if (count >= 10) return;
        setCount(count + 1)
    }

    const countDown = () => {
        if (count === 1) return;
        setCount(count - 1)
    }

    return (
        <Container>
            <PageTitle props={'Page Home'}/>
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
  font-size: 26px;
  margin: 0 5px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`

export default Home;
