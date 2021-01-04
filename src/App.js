import React from "react"
import styled, {createGlobalStyle} from "styled-components"

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
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
  }
`

const Container = styled.div`
`

export default App;