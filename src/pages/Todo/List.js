import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import TodoList from "../../component/Todo/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";

const List = ({history}) => {

    const {todos} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = () => {
        dispatch(Action.Creators.getTodos())
    }

    const navigate = (url) => {
        history.push(url);
    }

    return (
        <Container>
            <Button onClick={() => navigate(`/todo/write`)}>
                추가하기
            </Button>
            <TodoList todos={todos} navigate={navigate}/>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
`;

const Button = styled.div`
  width: 140px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #18f;
  color: #fff;
  font-size: 14px;
  cursor:pointer;
`;

export default List;