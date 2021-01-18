import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

// const props = { history, location, match}

const Detail = ({history, location, match}) => {

    const id = match.params.id;

    const [todo, setTodo] = useState({});

    useEffect(() => {
        getTodo()
    }, [])

    const getTodo = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        console.log("result", result);
        setTodo(result.data)
    }

    if (!todo.title) return "loading....."

    return (
        <Container>
            <h1>{todo.title}</h1>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export default Detail;