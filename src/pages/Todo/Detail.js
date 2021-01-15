import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";


const Detail = ({history, location, match}) => {

    const id = match.params.id;

    const [todo, setTodo] = useState({});

    useEffect(() => {
        getTodo()
    }, [])

    const getTodo = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        console.log("@@ result.data", result);
        // setTodo(result.data)
    }

    return (
        <Container>
            {id}
        </Container>
    )
}

const Container = styled.div`
    
`;

export default Detail;