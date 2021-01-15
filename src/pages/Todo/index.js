import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import cn from "classnames";

import PageTitle from "../../component/Title/PageTitle";
import {Link} from "react-router-dom";


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
                todos.map((item, index) => (
                 <h2 key={index} className={cn({completed: item.completed})}>
                    <Link to={`/todo/detail/${item.id}`}>{item.title}</Link>
                 </h2>
                ))
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default Todo;