import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import TodoItem from "../../component/Todo/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";

const Detail = ({match}) => {

    const id = match.params.id;
    
    const {todoDetail} = useSelector(state => state);
    const state = useSelector(state => state);
    console.log("state", state);
    
    const dispatch = useDispatch();

    useEffect(() => {
        getTodoById();
    }, [])

    const getTodoById = async () => {
        const result = await axios.get(`http://localhost:4000/todos/${id}`);
        dispatch(Action.Creators.todoDetail(result.data))
    }

    return (
        <Container>
            <TodoItem {...todoDetail}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Detail;