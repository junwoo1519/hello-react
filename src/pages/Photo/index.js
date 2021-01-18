import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import List from "./List";
import Detail from "./Detail";
import Search from "./Search";

const Photo = () => {
    return (
        <Container>
            <Switch>
                <Route exact path={"/photo"} component={List}/>
                <Route path={"/photo/detail/:id"} component={Detail}/>
                <Route path={"/photo/search/:query"} component={Search}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

export default Photo;