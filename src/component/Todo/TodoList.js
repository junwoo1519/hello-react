import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({todos = [], navigate}) => {

    return (
        <Container>
            {
                todos.map((todo, index) => (
                    <TodoItem key={index}
                              {...todo}
                                navigate={navigate}
                    />))
            }
        </Container>
    )
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
`;

export default TodoList;