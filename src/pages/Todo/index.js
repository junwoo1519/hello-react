import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {Button} from "../../components/Button/Button.Styled";
import PageTitle from "../../components/Title/PageTitle";

const Todo = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(result.data);
    }

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <Container>
            <PageTitle text={"Page Todo"}/>
            {
                todos.map((todo, index) => {
                    return <h2 key={index}>{todo.title}</h2>
                })
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default Todo;