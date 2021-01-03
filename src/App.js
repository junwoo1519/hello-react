import React from "react";
import styled, {createGlobalStyle} from "styled-components";

import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
    return (
        <Container ClassName={"App"}>
            <GlobalStyled/>
            <Header/>
            <Home/>
        </Container>
    )
}

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
`

const Container = styled.div`
`

export default App;
