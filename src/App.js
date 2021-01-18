import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import Header from "./component/Header";
import {Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Photo from "./pages/Photo";
import Detail from "./pages/Todo/Detail";

const App = () => {
    return (
        <Container className={"App"}>
            <GlobalStyle/>
            <Header/>

            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/todo'} component={Todo}/>
                <Route path={'/todo/detail/:id'} component={Detail}/>
                <Route path={'/photo'} component={Photo}/>
            </Switch>

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
  
  img {
    max-width: 100%;
    vertical-align: top;
  }
`;

export default App;