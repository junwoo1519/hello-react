import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {Button} from "../../component/Button/Button.Styled";
import PageTitle from "../../component/Title/PageTitle";


const User = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(result.data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <Container>
            <PageTitle text={"Page User"}/>
            {
                users.map((user, index) => {
                    return <h2 key={index}>{user.email}</h2>
                })
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default User;