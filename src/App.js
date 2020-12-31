import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Header from "./components/Header";
import Home from "./pages/Home";

const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
`;

function App() {
    return (
        <Container className={"App"}>
            <GlobalStyled/>
            <Header/>
            <Home/>
        </Container>
    )
}

const  Container = styled.div`
`

export default App;