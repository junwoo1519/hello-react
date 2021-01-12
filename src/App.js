import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route,Switch} from "react-router-dom";

import Header from "./component/Header";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Photo from "./pages/Photo";
import Video from "./pages/Video";
import User from "./pages/User";

const App = () => {
    return (
        <Container className={"App"}>
            <GlobalStyle/>
            <Header/>

            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/todo'} component={Todo}/>
                <Route path={'/photo'} component={Photo}/>
                <Route path={'/video'} component={Video}/>
                <Route path={'/user'} component={User}/>
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
`;

export default App;