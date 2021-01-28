import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import List from "./List";
import Detail from "./Detail";
import Write from "./Write";

const Todo = () => {
    return (
        <Container>
            <Switch>
                <Route exact path={"/todo"} component={List}/>
                <Route path={"/todo/detail/:id"} component={Detail}/>
                <Route path={"/todo/write"} component={Write}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

export default Todo;