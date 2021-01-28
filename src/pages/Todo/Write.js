import React from "react";
import styled from "styled-components";
import TodoForm from "../../component/Todo/TodoForm";
import axios from "axios";

const Write = ({history}) => {

    const addTodo = async (data) => {
       await axios.post(`http://localhost:4000/todos`, data)
        history.push('/todo')
    };

    return (
        <Container>
            <TodoForm onSubmit={addTodo()}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Write;