import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import PageTitle from "../../component/Title/PageTitle";

const User = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
       const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
       setUser(result.data)
    }

    return (
        <Container>
            <PageTitle text={"Page User"}/>
            {
                user.map((user, index) => {
                    return <h2>{user.id}</h2>
                })
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default User;