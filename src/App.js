import React from "react";
import styled, {createGlobalStyle} from "styled-components";

import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Photo from "./pages/Photo";
import Video from "./pages/Video";

const App = () => {
    return (
        <Container className={"App"}>
            <GlobalStyled/>
            <Header/>

            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/todo"} component={Todo}/>
                <Route path={"/photo"} component={Photo}/>
                <Route path={"/video"} component={Video}/>
            </Switch>

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
`;

const Container = styled.div`
`

export default App;