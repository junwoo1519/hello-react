import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Home from "./pages/Home"

const App = () => {
    return (
        <Container className={"App"}>
            <GlobalStyled/>
            <Header/>
            <Home/>
        </Container>
    )
}

const Container = styled.div`

`

const GlobalStyled = styled.div`
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
`

export default App;
