import React,{useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {Button} from "../../component/Button/Button.Styled";
import PageTitle from "../../component/Title/PageTitle";

const Todo = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const todos = result.data;
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
                    return <h2>{todo.title}</h2>
                })
            }

        </Container>
    )
}

const Container = styled.div`

`;

export default Todo;