import React from "react";
import styled, {createGlobalStyle} from "styled-components";

import Header from "./component/Header";
import Home from "./pages/Home";

const App = () => {
    return (
        <Container className={"App"}>
            <GlobalStyle/>
            <Header/>
            <Home/>
        </Container>
    )
}

const Container = styled.div`

`;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
  }
`;

export default App;